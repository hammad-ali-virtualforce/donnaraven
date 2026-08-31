import Image from "next/image";
import Link from "next/link";

import type {
  AssociatesSectionData,
} from "@/app/types/page-builder";

type AssociatesSectionProps = {
  section: AssociatesSectionData;
};

export default function AssociatesSection({
  section,
}: AssociatesSectionProps) {
  const associates =
    section.associates?.filter(Boolean) ?? [];

  if (!associates.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white">
      {/* =========================
          SECTION INTRO
      ========================= */}
      <div
        className="
          mx-auto
          max-w-[1500px]
          px-6
          pb-14
          pt-20
          text-center
          md:px-10
          md:pb-20
          md:pt-28
          xl:px-16
        "
      >
        {section.eyebrow && (
          <p
            className="
              mb-4
              font-mulish
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#ff1c0d]
              md:text-xs
            "
          >
            {section.eyebrow}
          </p>
        )}

        {section.heading && (
          <h2
            className="
              mx-auto
              max-w-[950px]
              font-tenor
              text-[38px]
              uppercase
              leading-[1.05]
              text-[#0b2f53]
              sm:text-[48px]
              md:text-[60px]
              lg:text-[72px]
            "
          >
            {section.heading}
          </h2>
        )}

        {section.description && (
          <div
            className="
              prose
              prose-p:my-0
              prose-p:leading-7
              mx-auto
              mt-7
              max-w-[760px]
              font-mulish
              text-[15px]
              text-[#0b2f53]/75
              md:text-base
            "
            dangerouslySetInnerHTML={{
              __html: section.description,
            }}
          />
        )}
      </div>

      {/* =========================
          ASSOCIATES GRID
      ========================= */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1700px]
          grid-cols-1
          gap-8
          px-6
          pb-20
          md:grid-cols-2
          md:px-10
          lg:grid-cols-3
          xl:px-16
        "
      >
        {associates.map((associate, index) => {
          const image =
            associate.image?.node ?? null;

          const href =
            associate.buttonLink || "#";

          const isExternal =
            href.startsWith("http://") ||
            href.startsWith("https://");

          return (
            <Link
              key={`${associate.name}-${index}`}
              href={href}
              target={
                isExternal ? "_blank" : undefined
              }
              rel={
                isExternal
                  ? "noopener noreferrer"
                  : undefined
              }
              className="
                group
                relative
                block
                h-[560px]
                overflow-hidden
                bg-white
              "
            >
              {/* =========================
                  NORMAL TEXT AREA
              ========================= */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  flex
                  h-[105px]
                  flex-col
                  items-center
                  justify-center
                  bg-white
                  px-5
                  text-center
                "
              >
                {associate.name && (
                  <h3
                    className="
                      font-tenor
                      text-[27px]
                      leading-[1.05]
                      text-[#0b2f53]
                      md:text-[30px]
                    "
                  >
                    {associate.name}
                  </h3>
                )}

                {associate.roleService && (
                  <p
                    className="
                      mt-3
                      font-mulish
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-black/35
                    "
                  >
                    {associate.roleService}
                  </p>
                )}
              </div>

              {/* =========================
                  EXPANDING IMAGE AREA
              ========================= */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  z-20
                  h-[455px]
                  overflow-hidden

                  transition-[height]
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:h-full
                "
              >
                {image ? (
                  <Image
                    src={image.sourceUrl}
                    alt={
                      image.altText ||
                      associate.name ||
                      ""
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.045]
                    "
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#f3f3f3]" />
                )}

                {/* =========================
                    HOVER GRADIENT
                ========================= */}
                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    bg-gradient-to-t
                    from-black/60
                    via-black/5
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =========================
                    TEXT OVER IMAGE ON HOVER
                ========================= */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-20
                    translate-y-5
                    px-6
                    pb-8
                    text-center
                    text-white
                    opacity-0

                    transition-all
                    duration-500
                    ease-out

                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {associate.name && (
                    <h3
                      className="
                        font-tenor
                        text-[28px]
                        leading-[1.05]
                        text-white
                        md:text-[32px]
                      "
                    >
                      {associate.name}
                    </h3>
                  )}

                  {associate.roleService && (
                    <p
                      className="
                        mt-3
                        font-mulish
                        text-[15px]
                        font-semibold
                        capitalize
                        tracking-[0.16em]
                        text-white
                      "
                    >
                      {associate.roleService}
                    </p>
                  )}
                  {associate.description && (
                    <p
                      className="
                        mt-3
                        font-mulish
                        text-[13px]
                        font-semibold
                        
                        tracking-[0.16em]
                        text-white
                      "
                    >
                      {associate.description}
                    </p>
                  )}
                </div>

                {/* =========================
                    HOVER BORDER
                ========================= */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-30
                    border-[3px]
                    border-white
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </div>
            </Link>
          );
        })}
      </div>
      {/* =========================
              SECTION BUTTONS
          ========================= */}
          {section.buttons && section.buttons.length > 0 && (
            <div
              className="
                w-full
                flex
                gap-16
                items-center
                justify-center
                font-mulish
                text-[18px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0b2f53]
                relative
                p-8
              "
            >
              {section.buttons.map((button, index) => {
                if (!button.buttonText || !button.buttonLink) {
                  return null;
                }

                const isExternal =
                  button.buttonLink.startsWith("http://") ||
                  button.buttonLink.startsWith("https://");

                return (
                  <Link
                    key={`${button.buttonText}-${index}`}
                    href={button.buttonLink}
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
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
                      {button.buttonText}
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
                );
              })}
            </div>
          )}
    </section>
  );
}