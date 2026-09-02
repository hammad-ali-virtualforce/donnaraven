"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useRef,
  useState,
} from "react";

import {
  Navigation,
  EffectFade,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import type {
  Swiper as SwiperType,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

import type {
  ReviewItem,
  ReviewsSectionData,
} from "@/app/types/page-builder";

type ReviewsSliderProps = {
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
            text-[25px]
            leading-none
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

export default function ReviewsSlider({
  section,
  reviews,
}: ReviewsSliderProps) {
  const backgroundImage =
    section.backgroundImage?.node;

  const swiperRef =
    useRef<SwiperType | null>(null);

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  if (!reviews.length) {
    return null;
  }

  return (
    <section
      className="
        bg-white
        text-[#0b2f53]
      "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
        "
      >
        {/* =========================
            LEFT REVIEW SLIDER
        ========================= */}

        <div
          className="
            relative
            min-h-[620px]
            overflow-hidden
            bg-[#0b2f53]
            text-white
            lg:min-h-[720px]
            md:order-1
            order-2
          "
        >
          {/* BACKGROUND IMAGE */}

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
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="
                object-cover
                object-center
              "
            />
          )}

          {/* OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-[#0b2f53]/25
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-gradient-to-t
              from-[#061c30]/80
              via-transparent
              to-[#061c30]/20
            "
          />

          {/* SLIDER */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[620px]
              items-center
              px-7
              py-20
              md:px-12
              lg:min-h-[720px]
              lg:px-16
              xl:px-20
            "
          >
            <div className="w-full">
              <Swiper
                modules={[
                  Navigation,
                  EffectFade,
                ]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                speed={700}
                loop={
                  reviews.length > 1
                }
                onSwiper={(swiper) => {
                  swiperRef.current =
                    swiper;
                }}
                onSlideChange={(
                  swiper
                ) => {
                  setActiveIndex(
                    swiper.realIndex
                  );
                }}
                className="w-full"
              >
                {reviews.map(
                  (review) => {
                    const details =
                      review.reviews;

                    return (
                      <SwiperSlide
                        key={review.id}
                      >
                        <div
                          className="
                            max-w-[620px]
                          "
                        >
                          {/* REVIEWER */}

                          {review.title && (
                            <h3
                              className="
                                mb-5
                                font-tenor
                                text-[30px]
                                uppercase
                                leading-none
                                tracking-[-0.03em]
                              "
                            >
                              {
                                review.title
                              }
                            </h3>
                          )}

                          {/* RATING */}

                          {details?.rating && (
                            <StarRating
                              rating={
                                details.rating
                              }
                            />
                          )}

                          {/* REVIEW */}

                          {details?.review && (
                            <div
                              className="
                                mt-7
                                max-w-[570px]
                                font-mulish
                                text-[16px]
                                font-light
                                leading-8
                                text-white/90

                                [&_p:not(:last-child)]:mb-5
                              "
                              dangerouslySetInnerHTML={{
                                __html:
                                  details.review,
                              }}
                            />
                          )}

                          {/* EXTRA DETAILS */}

                          {(details?.location ||
                            details?.clientType) && (
                            <div
                              className="
                                mt-6
                                flex
                                flex-wrap
                                gap-x-5
                                gap-y-2
                                font-mulish
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-white/60
                              "
                            >
                              {details.clientType && (
                                <span>
                                  {
                                    details.clientType
                                  }
                                </span>
                              )}

                              {details.location && (
                                <span>
                                  {
                                    details.location
                                  }
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </SwiperSlide>
                    );
                  }
                )}
              </Swiper>

              {/* NAVIGATION */}

              {reviews.length > 1 && (
                <div
                  className="
                    mt-12
                    flex
                    items-center
                    gap-6
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      swiperRef.current?.slidePrev()
                    }
                    aria-label="Previous review"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/60
                      font-mulish
                      text-lg
                      transition-all
                      duration-300
                      hover:border-[#ff1c0d]
                      hover:bg-[#ff1c0d]
                    "
                  >
                    ←
                  </button>

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      font-mulish
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-white/80
                    "
                  >
                    <span>
                      {String(
                        activeIndex + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className="
                        block
                        h-px
                        w-10
                        bg-white/50
                      "
                    />

                    <span>
                      {String(
                        reviews.length
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      swiperRef.current?.slideNext()
                    }
                    aria-label="Next review"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/60
                      font-mulish
                      text-lg
                      transition-all
                      duration-300
                      hover:border-[#ff1c0d]
                      hover:bg-[#ff1c0d]
                    "
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT CONTENT
        ========================= */}

        <div
          className="
            flex
            min-h-[620px]
            items-center
            bg-gradient-to-b
            from-[#fbfbfb]
            via-[#f3f3f3]
            to-[#fbfbfb]
            px-6
            py-20
            md:px-10
            lg:min-h-[720px]
            lg:px-16
            xl:px-20
            md:order-2
            order-1
          "
        >
          <div
            className="
              w-full
              max-w-[620px]
            "
          >
            {section.eyebrow && (
              <p
                className="
                  mb-5
                  font-mulish
                  text-[15px]
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
                  text-[clamp(3rem,5vw,6rem)]
                  uppercase
                  leading-[0.9]
                  tracking-[-0.035em]
                "
              >
                {section.heading}
              </h2>
            )}

            {section.description && (
              <div
                className="
                  mt-8
                  max-w-[540px]
                  font-mulish
                  text-[14px]
                  leading-7
                  text-[#0b2f53]/75

                  [&_p:not(:last-child)]:mb-5
                "
                dangerouslySetInnerHTML={{
                  __html:
                    section.description,
                }}
              />
            )}

            {section.buttonText &&
              section.buttonLink && (
                <div
                  className="
                    mt-9
                    flex
                    flex-wrap
                    items-center
                    gap-x-10
                    gap-y-4
                    font-mulish
                    text-[18px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                  "
                >
                  <Link
                    href={
                      section.buttonLink
                    }
                    className="
                      group
                      relative
                      flex
                      items-center
                      gap-4
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
                        bottom-[-10px]
                        left-0
                        block
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
        </div>
      </div>
    </section>
  );
}