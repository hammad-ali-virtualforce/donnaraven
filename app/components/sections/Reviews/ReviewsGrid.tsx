"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  ReviewItem,
  ReviewsSectionData,
} from "@/app/types/page-builder";

type ReviewsGridProps = {
  section: ReviewsSectionData;
  reviews: ReviewItem[];
};

function StarRating({
  rating,
}: {
  rating: number;
}) {
  const safeRating = Math.max(
    0,
    Math.min(5, rating)
  );

  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-1
        text-[#ff1c0d]
      "
      aria-label={`${safeRating} out of 5 stars`}
    >
      {Array.from({
        length: 5,
      }).map((_, index) => (
        <span
          key={index}
          className="
            text-[22px]
            leading-none
            text-white
          "
        >
          {index <
          Math.round(safeRating)
            ? "★"
            : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function ReviewsGrid({
  section,
  reviews,
}: ReviewsGridProps) {
  const reviewsPerPage =
    Number(section.reviewsPerPage) ||
    6;

  const [currentPage, setCurrentPage] =
    useState(1);

  const backgroundImage =
    section.backgroundImage?.node;

  const totalPages = Math.ceil(
    reviews.length / reviewsPerPage
  );

  const visibleReviews =
    useMemo(() => {
      const start =
        (currentPage - 1) *
        reviewsPerPage;

      const end =
        start + reviewsPerPage;

      return reviews.slice(
        start,
        end
      );
    }, [
      reviews,
      currentPage,
      reviewsPerPage,
    ]);

  useEffect(() => {
    if (
      currentPage > totalPages &&
      totalPages > 0
    ) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function changePage(
    page: number
  ) {
    setCurrentPage(page);

    window.requestAnimationFrame(
      () => {
        const element =
          document.getElementById(
            "reviews-grid"
          );

        if (element) {
          const top =
            element.getBoundingClientRect()
              .top +
            window.scrollY -
            110;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }
    );
  }

  return (
    <section
      id="reviews-grid"
      className="
        bg-white
        py-32
        text-[#0b2f53]
        
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          md:px-10
          xl:px-16
        "
      >
        {/* =========================
            INTRO
        ========================= */}

        {(section.eyebrow ||
          section.heading ||
          section.description) && (
          <div
            className="
              mx-auto
              mb-10
              max-w-[850px]
              text-center
              md:mb-14
            "
          >
            {section.eyebrow && (
              <p
                className="
                  mb-4
                  font-mulish
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#ff1c0d]
                "
              >
                {section.eyebrow}
              </p>
            )}

            {section.heading && (
              <h2
                className="
                  font-tenor
                  text-[clamp(2.8rem,5vw,5.5rem)]
                  uppercase
                  leading-[0.95]
                  tracking-[-0.035em]
                  text-[#0b2f53]
                "
              >
                {section.heading}
              </h2>
            )}

            {section.description && (
              <div
                className="
                  mx-auto
                  mt-6
                  max-w-[680px]
                  font-mulish
                  text-[14px]
                  leading-7
                  text-[#0b2f53]/70

                  [&_p:not(:last-child)]:mb-4
                "
                dangerouslySetInnerHTML={{
                  __html:
                    section.description,
                }}
              />
            )}
          </div>
        )}

        {/* =========================
            REVIEWS GRID
        ========================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
          "
        >
          {visibleReviews.map(
            (review) => {
              const details =
                review.reviews;

              return (
                <article
                  key={review.id}
                  className="
                    relative
                    min-h-[360px]
                    overflow-hidden
                    bg-[#0b2f53]
                    text-white
                    md:min-h-[400px]
                    py-8
                  "
                >
                  {/* CARD BACKGROUND IMAGE */}

                  {backgroundImage && (
                    <Image
                      src={
                        backgroundImage.sourceUrl
                      }
                      alt={
                        backgroundImage.altText ||
                        ""
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="
                        object-cover
                        object-center
                        z-[9]
                      "
                    />
                  )}
                  <div className="

                    pointer-events-none

                    absolute

                    inset-0

                    z-[10]

                    bg-[#0b2f53]/25

                    "></div>
                <div className="

                    pointer-events-none

                    absolute

                    inset-0

                    z-[10]

                    bg-gradient-to-t

                    from-[#061c30]/80

                    via-transparent

                    to-[#061c30]/20

                    ">
                </div>
                  {/* CARD OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-[1]
                      bg-[#062d54]/88
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-[1]
                      bg-gradient-to-b
                      from-[#062d54]/20
                      via-[#062d54]/55
                      to-[#031f3a]/85
                    "
                  />

                  {/* CARD CONTENT */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      min-h-[360px]
                      flex-col
                      items-center
                      justify-center
                      px-7
                      py-9
                      text-center
                      md:min-h-[400px]
                      md:px-10
                      md:py-10
                      lg:px-12
                    "
                  >
                    {/* STARS */}

                    <StarRating
                      rating={
                        details?.rating ??
                        5
                      }
                    />

                    {/* REVIEW */}

                    {details?.review && (
                      <div
                        className="
                          mx-auto
                          mt-7
                          max-w-[540px]
                          font-mulish
                          text-[15px]
                          font-medium
                          leading-7
                          text-white/95
                          md:text-[16px]
                          md:leading-8

                          [&_p:not(:last-child)]:mb-4
                        "
                        dangerouslySetInnerHTML={{
                          __html:
                            details.review,
                        }}
                      />
                    )}

                    {/* REVIEWER */}

                    {review.title && (
                      <h3
                        className="
                          mt-8
                          font-tenor
                          text-[24px]
                          uppercase
                          leading-none
                          text-white
                          md:text-[27px]
                        "
                      >
                        {review.title}
                      </h3>
                    )}
                  </div>
                </article>
              );
            }
          )}
        </div>

        {/* =========================
            PAGINATION
        ========================= */}

        {totalPages > 1 && (
          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <button
              type="button"
              disabled={
                currentPage === 1
              }
              onClick={() =>
                changePage(
                  currentPage - 1
                )
              }
              aria-label="Previous page"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#0b2f53]/30
                font-mulish
                text-[#0b2f53]
                transition-all
                duration-300

                hover:border-[#ff1c0d]
                hover:bg-[#ff1c0d]
                hover:text-white

                    cursor-pointer
                disabled:pointer-events-none
                disabled:opacity-30
              "
            >
              ←
            </button>

            {Array.from({
              length: totalPages,
            }).map((_, index) => {
              const page =
                index + 1;

              const isActive =
                page === currentPage;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() =>
                    changePage(page)
                  }
                  className={`
                    relative
                    min-w-7
                    pb-2
                    font-mulish
                    text-[12px]
                    font-semibold
                    tracking-[0.1em]
                    cursor-pointer
                    ${
                      isActive
                        ? "text-[#0b2f53]"
                        : "text-[#0b2f53]/40 hover:text-[#0b2f53]"
                    }
                  `}
                >
                  {String(
                    page
                  ).padStart(
                    2,
                    "0"
                  )}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-full
                        bg-[#ff1c0d]
                      "
                    />
                  )}
                </button>
              );
            })}

            <button
              type="button"
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                changePage(
                  currentPage + 1
                )
              }
              aria-label="Next page"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#0b2f53]/30
                font-mulish
                text-[#0b2f53]
                transition-all
                duration-300

                    cursor-pointer
                hover:border-[#ff1c0d]
                hover:bg-[#ff1c0d]
                hover:text-white

                disabled:pointer-events-none
                disabled:opacity-30
              "
            >
              →
            </button>
          </div>
        )}

        {/* =========================
            OPTIONAL CTA
        ========================= */}

        {section.buttonText &&
          section.buttonLink && (
            <div
              className="
                mt-10
                flex
                justify-center
              "
            >
              <Link
                href={
                  section.buttonLink
                }
                className="
                  group
                  relative
                  font-mulish
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#0b2f53]
                "
              >
                <span>
                  {
                    section.buttonText
                  }
                </span>

                <span
                  className="
                    absolute
                    bottom-[-9px]
                    left-0
                    h-[3px]
                    w-8
                    bg-[#ff1c0d]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            </div>
          )}
      </div>
    </section>
  );
}