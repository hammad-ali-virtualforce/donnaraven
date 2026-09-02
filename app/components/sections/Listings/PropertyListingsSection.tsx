"use client";

import { useMemo, useState } from "react";

import ListingCard from "@/app/components/sections/Listings/ListingCard";
import { demoListings } from "@/app/data/demoListings";

import type {
  PropertyListingsSectionData,
} from "@/app/types/page-builder";

type PropertyListingsSectionProps = {
  section: PropertyListingsSectionData;
};

export default function PropertyListingsSection({
  section,
}: PropertyListingsSectionProps) {
  const {
    eyebrow,
    heading,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    propertyType,
    columns,
    propertiesPerPage = 12,
  } = section;
const normalizedPropertyType =
  Array.isArray(propertyType)
    ? propertyType[0] ?? "all"
    : propertyType ?? "all";
  const [currentPage, setCurrentPage] =
    useState(1);

  /* ========================================
     FILTER LISTINGS
  ======================================== */

  const listings = useMemo(() => {
    if (normalizedPropertyType  === "active") {
      return demoListings.filter(
        (listing) =>
          listing.status === "active"
      );
    }

    if (normalizedPropertyType  === "sold") {
      return demoListings.filter(
        (listing) =>
          listing.status === "sold"
      );
    }
    return demoListings;
  }, [propertyType]);


  /* ========================================
     PAGINATION
  ======================================== */

  const perPage =
    Number(propertiesPerPage) || 12;

  const totalPages = Math.max(
    1,
    Math.ceil(
      listings.length / perPage
    )
  );

  const startIndex =
    (currentPage - 1) * perPage;

  const visibleListings =
    listings.slice(
      startIndex,
      startIndex + perPage
    );

  /* ========================================
     GRID COLUMNS
  ======================================== */

  const gridColumns =
    String(columns) === "4"
      ? "lg:grid-cols-3 xl:grid-cols-4"
      : "lg:grid-cols-3";

  const handlePageChange = (
    page: number
  ) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        bg-white
        py-32
        text-[#0b2f53] 
      "
      id="properties"
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
        {/* ==================================
            SECTION INTRO
        ================================== */}

        {(eyebrow ||
          heading ||
          description) && (
          <div
            className="
              mx-auto
              mb-12
              max-w-[900px]
              text-center
              md:mb-14
              lg:mb-16
            "
          >
            {eyebrow && (
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
                {eyebrow}
              </p>
            )}

            {heading && (
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
                {heading}
              </h2>
            )}

            {description && (
              <div
                className="
                  mx-auto
                  mt-6
                  max-w-[700px]
                  font-mulish
                  text-[15px]
                  leading-7
                  text-[#0b2f53]/70

                  [&_p:not(:last-child)]:mb-4
                "
                dangerouslySetInnerHTML={{
                  __html:
                    description,
                }}
              />
            )}
          </div>
        )}

        {/* ==================================
            LISTINGS GRID
        ================================== */}

        {visibleListings.length >
        0 ? (
          <div
            className={`
              grid
              grid-cols-1
              gap-x-5
              gap-y-8
              md:grid-cols-2
              md:gap-y-10
              ${gridColumns}
            `}
          >
            {visibleListings.map(
              (listing) => (
                <ListingCard
                  key={listing.id}
                  listing={
                    listing
                  }
                />
              )
            )}
          </div>
        ) : (
          <div
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              border-y
              border-[#0b2f53]/10
              text-center
            "
          >
            <div>
              <h3
                className="
                  font-tenor
                  text-[28px]
                  uppercase
                  text-[#0b2f53]
                "
              >
                No Properties Found
              </h3>

              <p
                className="
                  mt-3
                  font-mulish
                  text-[14px]
                  text-[#0b2f53]/60
                "
              >
                Please check back
                soon for new
                listings.
              </p>
            </div>
          </div>
        )}

        {/* ==================================
            PAGINATION
        ================================== */}

        {totalPages > 1 && (
          <div
            className="
              mt-14
              flex
              items-center
              justify-center
              gap-2
              md:mt-16
            "
          >
            {/* PREVIOUS */}

            <button
              type="button"
              onClick={() =>
                handlePageChange(
                  Math.max(
                    1,
                    currentPage - 1
                  )
                )
              }
              disabled={
                currentPage === 1
              }
              className="
                flex
                h-11
                min-w-11
                items-center
                justify-center
                border
                border-[#0b2f53]/20
                px-4
                font-mulish
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#0b2f53]
                transition-colors
                duration-300

                hover:border-[#ff1c0d]
                hover:bg-[#ff1c0d]
                hover:text-white

                disabled:cursor-not-allowed
                disabled:opacity-30
                disabled:hover:border-[#0b2f53]/20
                disabled:hover:bg-transparent
                disabled:hover:text-[#0b2f53]
              "
            >
              Prev
            </button>

            {/* PAGE NUMBERS */}

            {Array.from(
              {
                length:
                  totalPages,
              },
              (_, index) =>
                index + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() =>
                  handlePageChange(
                    page
                  )
                }
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  font-mulish
                  text-[13px]
                  font-semibold
                  transition-colors
                  duration-300

                  ${
                    currentPage ===
                    page
                      ? `
                        border-[#ff1c0d]
                        bg-[#ff1c0d]
                        text-white
                      `
                      : `
                        border-[#0b2f53]/20
                        text-[#0b2f53]

                        hover:border-[#ff1c0d]
                        hover:text-[#ff1c0d]
                      `
                  }
                `}
              >
                {page}
              </button>
            ))}

            {/* NEXT */}

            <button
              type="button"
              onClick={() =>
                handlePageChange(
                  Math.min(
                    totalPages,
                    currentPage + 1
                  )
                )
              }
              disabled={
                currentPage ===
                totalPages
              }
              className="
                flex
                h-11
                min-w-11
                items-center
                justify-center
                border
                border-[#0b2f53]/20
                px-4
                font-mulish
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#0b2f53]
                transition-colors
                duration-300

                hover:border-[#ff1c0d]
                hover:bg-[#ff1c0d]
                hover:text-white

                disabled:cursor-not-allowed
                disabled:opacity-30
                disabled:hover:border-[#0b2f53]/20
                disabled:hover:bg-transparent
                disabled:hover:text-[#0b2f53]
              "
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}