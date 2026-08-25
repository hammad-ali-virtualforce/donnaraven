import Image from "next/image";
import Link from "next/link";

import type {
  Listing,
} from "@/app/types/listing";

type ListingCardProps = {
  listing: Listing;
};

function formatPrice(
  price: number
) {
  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }
  ).format(price);
}

export default function ListingCard({
  listing,
}: ListingCardProps) {
  const href =
    listing.url || "#";
  return (
    <article
      className="
        group
        relative
        min-h-[390px]
        overflow-hidden
        bg-[#0b2f53]
        md:min-h-[470px]
        xl:min-h-[520px]
      "
    >
      <Link
        href={href}
        className="
          absolute
          inset-0
          z-20
        "
        aria-label={`View ${listing.address}`}
      />

      <Image
        src={listing.image}
        alt={`${listing.address}, ${listing.city}`}
        fill
        sizes="
          (max-width: 768px) 100vw,
          50vw
        "
        className="
          object-cover
          transition-transform
          duration-[1200ms]
          ease-out
          group-hover:scale-[1.05]
        "
      />

      {/* dark fade */}

      <div
        className="
          pointer-events-none
    absolute
    inset-0
    z-[5]
    bg-gradient-to-t
    from-[#061c30]/75
    via-[#061c30]/10
    via-[75%]
    to-transparent
    transition-all
    duration-500

    group-hover:from-[#061c30]/95
    group-hover:via-[#061c30]/45
        "
      />

      {/* status */}

      <div
        className={`
          absolute
          right-0
          top-0
          z-10
          px-5
          py-3
          font-mulish
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-white

          ${
            listing.status === "active"
              ? "bg-[#35d12a]"
              : "bg-[#ff4c41]"
          }
        `}
      >
        {listing.status}
      </div>

      {/* bottom content */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-6
          text-white
          md:p-8
        "
      >
        <p
          className="
            mb-3
            font-mulish
            text-[10px]
            uppercase
            tracking-[0.15em]
            text-white/70
          "
        >
          {listing.address}
        </p>

        <div
          className="
            flex
            items-end
            justify-between
            gap-5
          "
        >
          <div>
            <h3
              className="
                font-tenor
                text-[clamp(2rem,3vw,3.8rem)]
                leading-none
                tracking-[-0.025em]
              "
            >
              {listing.city}
            </h3>

            <p
              className="
                mt-3
                font-mulish
                text-[11px]
                uppercase
                tracking-[0.13em]
                text-white/70
              "
            >
              {listing.state}{" "}
              {listing.zip}
            </p>
          </div>

          <p
            className="
              whitespace-nowrap
              font-mulish
              text-sm
              tracking-[0.06em]
            "
          >
            {formatPrice(
              listing.price
            )}
          </p>
        </div>

        {(listing.bedrooms ||
          listing.bathrooms ||
          listing.sqft) && (
          <div
            className="
              mt-6
              flex
              gap-5
              border-t
              border-white/25
              pt-5
              font-mulish
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-white/70
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
            "
          >
            {listing.bedrooms && (
              <span>
                {listing.bedrooms} Beds
              </span>
            )}

            {listing.bathrooms && (
              <span>
                {listing.bathrooms} Baths
              </span>
            )}

            {listing.sqft && (
              <span>
                {listing.sqft.toLocaleString()}{" "}
                Sq Ft
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}