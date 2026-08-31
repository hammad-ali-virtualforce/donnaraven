import Image from "next/image";

import type {
  InnerHeroSectionData,
} from "@/app/types/page-builder";

type InnerHeroSectionProps = {
  section: InnerHeroSectionData;
};

export default function InnerHeroSection({
  section,
}: InnerHeroSectionProps) {
  const backgroundImage =
    section.backgroundImage?.node;

  const portraitImage =
    section.portraitImage?.node;

  const overlayOpacity =
    section.overlayOpacity ?? 35;
  const textColor =
    section.textColor || "#ffffff";

  return (
    <section
      className="
        relative
        min-h-[760px]
        overflow-hidden
        bg-[#bb3c34]
        lg:min-h-[880px]
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}

      {backgroundImage && (
        <Image
          src={backgroundImage.sourceUrl}
          alt={
            backgroundImage.altText ||
            section.heading ||
            ""
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* =========================================
          BACKGROUND OVERLAY
      ========================================== */}

      <div
        className="absolute inset-0 bg-[#061c33]"
        style={{
          opacity: overlayOpacity / 100,
        }}
      />

      {/* =========================================
          LEFT GRADIENT
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#bb3c34]/90
          via-[#fe1b0c9e]/55
          to-transparent
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[760px]
          w-full
          max-w-[1700px]
          items-end
          px-6
          pb-16
          pt-36
          md:px-10
          md:pb-20
          lg:min-h-[880px]
          lg:items-center
          lg:px-16
          lg:pb-0
          lg:pt-28
          xl:px-20
        "
      >
        {/* =========================================
            TEXT
        ========================================== */}

        <div
          className="
            relative
            z-20
            w-full
            max-w-[720px]
            pb-[380px]
            lg:pb-0
          "
          style={{
            color:
              section.textColor ||
              "#ffffff",
          }}
        >
          {section.eyebrow && (
            <p
              className="
                mb-5
                font-mulish
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
              "
              style={{
            color:
              section.textColor ||
              "#ffffff",
          }}
            >
              {section.eyebrow}
            </p>
          )}

          {section.heading && (
            <h1
              className="
                font-tenor
                text-[clamp(4rem,8vw,8.5rem)]
                uppercase
                leading-[0.84]
                tracking-[-0.045em]
              "
            >
              {section.heading}
            </h1>
          )}

          {section.description && (
            <div
              className="
                mt-8
                max-w-[560px]
                font-mulish
                text-[15px]
                leading-8
                text-current/80
                md:text-[16px]
              "
              dangerouslySetInnerHTML={{
                __html:
                  section.description,
              }}
            />
          )}
        </div>

        {/* =========================================
            PORTRAIT
        ========================================== */}

        {portraitImage && (
            <div
                className="
                pointer-events-none
                absolute
                bottom-0
                right-[-60px]
                h-[520px]
                w-[420px]

                sm:right-[-10px]
                sm:h-[580px]
                sm:w-[460px]

                md:right-[20px]
                md:h-[650px]
                md:w-[520px]

                lg:right-[40px]
                lg:h-[760px]
                lg:w-[620px]

                xl:right-[70px]
                xl:h-[820px]
                xl:w-[680px]
                "
            >
                <Image
                src={portraitImage.sourceUrl.trim()}
                alt={portraitImage.altText || "Donna Raven"}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 700px"
                className="object-contain object-bottom"
                />
            </div>
            )}
      </div>

      {/* =========================================
          BOTTOM ACCENT
      ========================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[4px]
          w-[140px]
          bg-[#ff4c41]
          md:w-[220px]
        "
      />
    </section>
  );
}