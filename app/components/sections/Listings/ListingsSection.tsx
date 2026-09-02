import Link from "next/link";

import ListingCard from "./ListingCard";
import { demoListings } from "@/app/data/demoListings";

import type {
  ListingsSectionData,
} from "@/app/types/page-builder";

type ListingsSectionProps = {
  section: ListingsSectionData;
};

export default function ListingsSection({
  section,
}: ListingsSectionProps) {
  const limit =
    section.numberOfListings || 4;

  const listings =
    demoListings.slice(0, limit);
console.log("section listing", section)
  return (
    <section
      className="
        bg-white
        py-16
        text-[#0b2f53]
        md:py-20
      "
      id="properties"
    >
      {/* =========================
          SECTION HEADER
      ========================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-6
          md:px-10
          xl:px-16
        "
      >
        <div
          className="
            mb-10
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* LEFT HEADING */}

          <div>
            <p
              className="
                mb-3
                font-mulish
                text-[15px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#ff4c41]
              "
            >
              {section.eyebrow ||
                "ACTIVE & SOLD"}
            </p>

            <h2
              className="
                font-tenor
                text-[clamp(3rem,5vw,5.8rem)]
                font-normal
                uppercase
                leading-[0.9]
                tracking-[-0.035em]
              "
            >
              {section.heading ||
                "Listings"}
            </h2>
          </div>

          {/* RIGHT PAGE LINKS */}

          <div
            className="
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
            {section.primaryButtonText && section.primaryButtonLink && (
              <Link
                href={section.primaryButtonLink}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  relative
                "
              >
                <span>
                  {section.primaryButtonText}
                </span>

                <span
                  className="
                    block
                    h-[3px]
                    w-8
                    bg-[#ff4c41]
                    transition-all
                    duration-300
                    group-hover:w-full
                    absolute
                    bottom-[-10px]
                  "
                />
              </Link>
            )}

            {section.secondaryButtonText && section.secondaryButtonLink && (
              <Link
                href={section.secondaryButtonLink}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  relative
                "
              >
                <span>
                  {section.secondaryButtonText}
                </span>

                <span
                  className="
                    block
                    h-[3px]
                    w-8
                    bg-[#ff4c41]
                    transition-all
                    duration-300
                    group-hover:w-full
                    absolute
                    bottom-[-10px]
                  "
                />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* =========================
          LISTINGS GRID
      ========================== */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-2
        "
      >
        {listings.map(
          (listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
            />
          )
        )}
      </div>
    </section>
  );
}