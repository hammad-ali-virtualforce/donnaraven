import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { demoListings } from "@/app/data/demoListings";

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
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

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { slug } = await params;

  const listing =
    demoListings.find(
      (property) =>
        property.slug === slug
    );

  if (!listing) {
    notFound();
  }

  const gallery =
    listing.gallery?.length
      ? listing.gallery
      : [listing.image];

  return (
    <main
      className="
        bg-white
        text-[#0b2f53]
      "
    >
      {/* =====================================
          PROPERTY HERO
      ===================================== */}

      <section
        className="
          relative
          min-h-[72vh]
          overflow-hidden
          bg-[#0b2f53]
        "
      >
        <Image
          src={listing.image}
          alt={`${listing.address}, ${listing.city}`}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />

        {/* OVERLAYS */}

        <div
          className="
            absolute
            inset-0
            bg-black/20
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#061d33]/90
            via-[#061d33]/20
            to-transparent
          "
        />

        {/* STATUS */}

        <div
          className="
            absolute
            left-6
            top-28
            z-10
            md:left-10
            lg:left-16
          "
        >
          <span
            className={`
              inline-flex
              px-5
              py-2
              font-mulish
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              

              ${
                listing.status ===
                "active"
                  ? "bg-[#ff1c0d] text-white"
                  : "bg-[#222] text-[#fff] border-[#ff1c0d] border"
              }
            `}
          >
            {listing.status ===
            "active"
              ? "For Sale"
              : "Sold"}
          </span>
        </div>

        {/* HERO CONTENT */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1500px]
              px-6
              pb-12
              md:px-10
              md:pb-16
              lg:px-16
              lg:pb-20
            "
          >
            <div
              className="
                max-w-[1000px]
                text-white
              "
            >
              <p
                className="
                  mb-4
                  font-mulish
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-white/75
                "
              >
                {listing.city},{" "}
                {listing.state}
              </p>

              <h1
                className="
                  font-tenor
                  text-[clamp(2.8rem,6vw,6.5rem)]
                  uppercase
                  leading-[0.92]
                  tracking-[-0.035em]
                "
              >
                {listing.address}
              </h1>

              <p
                className="
                  mt-6
                  font-tenor
                  text-[30px]
                  md:text-[38px]
                "
              >
                {formatPrice(
                  listing.price
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          QUICK PROPERTY STATS
      ===================================== */}

      <section
        className="
          border-b
          border-[#0b2f53]/10
          bg-white
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1500px]
            grid-cols-2
            px-6
            md:grid-cols-4
            md:px-10
            lg:px-16
          "
        >
          <PropertyStat
            value={String(
              listing.bedrooms
            )}
            label="Bedrooms"
          />

          <PropertyStat
            value={String(
              listing.bathrooms
            )}
            label="Bathrooms"
          />

          <PropertyStat
            value={listing.sqft.toLocaleString()}
            label="Sq Ft"
          />

          <PropertyStat
            value={listing.zip}
            label="ZIP Code"
          />
        </div>
      </section>

      {/* =====================================
          DESCRIPTION + INFORMATION
      ===================================== */}

      <section
        className="
          py-16
          md:py-20
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            gap-14
            px-6
            md:px-10
            lg:grid-cols-[1.5fr_0.8fr]
            lg:gap-24
            lg:px-16
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                mb-4
                font-mulish
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#ff1c0d]
              "
            >
              About The Property
            </p>

            <h2
              className="
                max-w-[720px]
                font-tenor
                text-[clamp(2.5rem,4vw,4.8rem)]
                uppercase
                leading-[0.98]
                tracking-[-0.03em]
              "
            >
              A Place To Call Home
            </h2>

            {listing.description && (
              <p
                className="
                  mt-7
                  max-w-[780px]
                  font-mulish
                  text-[15px]
                  leading-8
                  text-[#0b2f53]/70
                  md:text-[16px]
                "
              >
                {
                  listing.description
                }
              </p>
            )}
          </div>

          {/* RIGHT FACTS */}

          <div
            className="
              border-t
              border-[#0b2f53]/15
            "
          >
            <PropertyDetail
              label="Property Type"
              value={
                listing.propertyType ??
                "Residential"
              }
            />

            <PropertyDetail
              label="Year Built"
              value={
                listing.yearBuilt
                  ? String(
                      listing.yearBuilt
                    )
                  : "—"
              }
            />

            <PropertyDetail
              label="Living Area"
              value={`${listing.sqft.toLocaleString()} Sq Ft`}
            />

            <PropertyDetail
              label="Lot Size"
              value={
                listing.lotSize ??
                "—"
              }
            />

            <PropertyDetail
              label="Parking"
              value={
                listing.parking ??
                "—"
              }
            />

            <PropertyDetail
              label="Location"
              value={`${listing.city}, ${listing.state} ${listing.zip}`}
            />
          </div>
        </div>
      </section>

      {/* =====================================
          GALLERY
      ===================================== */}

      {gallery.length > 1 && (
        <section
          className="
            bg-[#f4f2ed]
            py-16
            md:py-20
            lg:py-24
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1500px]
              px-6
              md:px-10
              lg:px-16
            "
          >
            <div
              className="
                mb-10
                flex
                flex-col
                justify-between
                gap-5
                md:flex-row
                md:items-end
              "
            >
              <div>
                <p
                  className="
                    mb-3
                    font-mulish
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#ff1c0d]
                  "
                >
                  Explore
                </p>

                <h2
                  className="
                    font-tenor
                    text-[clamp(2.5rem,4vw,4.5rem)]
                    uppercase
                    leading-none
                  "
                >
                  Property Gallery
                </h2>
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-3
                md:grid-cols-2
                lg:grid-cols-12
              "
            >
              {/* LARGE IMAGE */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  lg:col-span-7
                  lg:row-span-2
                  lg:aspect-auto
                  lg:min-h-[700px]
                "
              >
                <Image
                  src={gallery[0]}
                  alt={`${listing.address} property`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                  "
                />
              </div>

              {gallery
                .slice(1, 3)
                .map(
                  (
                    image,
                    index
                  ) => (
                    <div
                      key={`${image}-${index}`}
                      className="
                        relative
                        aspect-[4/3]
                        overflow-hidden
                        lg:col-span-5
                        lg:min-h-[344px]
                        lg:aspect-auto
                      "
                    >
                      <Image
                        src={image}
                        alt={`${listing.address} property ${index + 2}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-[1.03]
                        "
                      />
                    </div>
                  )
                )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          LOCATION
      ===================================== */}

      <section
        className="
          bg-white
          py-16
          md:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1400px]
            px-6
            md:px-10
            lg:px-16
          "
        >
          <div
            className="
              border-y
              border-[#0b2f53]/15
              py-12
              md:flex
              md:items-center
              md:justify-between
              md:gap-12
            "
          >
            <div>
              <p
                className="
                  mb-3
                  font-mulish
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#ff1c0d]
                "
              >
                Location
              </p>

              <h2
                className="
                  font-tenor
                  text-[34px]
                  uppercase
                  leading-tight
                  md:text-[46px]
                "
              >
                {listing.city},{" "}
                {listing.state}
              </h2>

              <p
                className="
                  mt-3
                  font-mulish
                  text-[14px]
                  text-[#0b2f53]/60
                "
              >
                {listing.address},{" "}
                {listing.city},{" "}
                {listing.state}{" "}
                {listing.zip}
              </p>
            </div>

            <div
              className="
                mt-8
                md:mt-0
              "
            >
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${listing.address}, ${listing.city}, ${listing.state} ${listing.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-13
                  items-center
                  justify-center
                  bg-[#ff1c0d]
                  px-8
                  font-mulish
                  text-[11px]
                  font-bold
                  border
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-colors
                  duration-300
                  hover:border-[#ff1c0d]
                  hover:bg-white
                  hover:text-[#ff1c0d]
                "
              >
                View Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT CTA
      ===================================== */}

      <section
        className="
          bg-gradient-to-br from-[#ff1c0d] via-[#e9190c] to-[#b81208]
          py-20
          text-white
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-[1000px]
            px-6
            text-center
          "
        >
          <p
            className="
              mb-4
              font-mulish
              text-[15px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#fff]
            "
          >
            Interested In This
            Property?
          </p>

          <h2
            className="
              font-tenor
              text-[clamp(2.8rem,5vw,5.5rem)]
              uppercase
              leading-[0.95]
              tracking-[-0.03em]
            "
          >
            Schedule A Private
            Showing
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[620px]
              font-mulish
              text-[15px]
              leading-7
              text-white
            "
          >
            Connect with Donna to
            learn more about this
            property or arrange a
            private showing.
          </p>

          <Link
            href="/contact/"
            className="
              mt-9
              inline-flex
              min-h-14
              items-center
              justify-center
              border
              border-whote
              px-10
              font-mulish
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              transition-colors
              duration-300
              hover:bg-white
              hover:text-[#0b2f53]
            "
          >
            Contact Donna
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ==========================================
   SMALL COMPONENTS
========================================== */

type PropertyStatProps = {
  value: string;
  label: string;
};

function PropertyStat({
  value,
  label,
}: PropertyStatProps) {
  return (
    <div
      className="
        flex
        min-h-[130px]
        flex-col
        items-center
        justify-center
        border-b
        border-r
        border-[#0b2f53]/10
        px-4
        text-center
        md:min-h-[150px]
        md:border-b-0
        last:border-r-0
      "
    >
      <span
        className="
          font-tenor
          text-[30px]
          leading-none
          md:text-[36px]
        "
      >
        {value}
      </span>

      <span
        className="
          mt-3
          font-mulish
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#0b2f53]/50
        "
      >
        {label}
      </span>
    </div>
  );
}

type PropertyDetailProps = {
  label: string;
  value: string;
};

function PropertyDetail({
  label,
  value,
}: PropertyDetailProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-6
        border-b
        border-[#0b2f53]/15
        py-5
      "
    >
      <span
        className="
          font-mulish
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#0b2f53]/50
        "
      >
        {label}
      </span>

      <span
        className="
          text-right
          font-mulish
          text-[14px]
          font-semibold
          text-[#0b2f53]
        "
      >
        {value}
      </span>
    </div>
  );
}