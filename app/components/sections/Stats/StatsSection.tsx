import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/app/components/animatedCounter/animatedCounter";
import type {
  StatsSectionData,
} from "@/app/types/page-builder";

type StatsSectionProps = {
  section: StatsSectionData;
};

export default function StatsSection({
  section,
}: StatsSectionProps) {
  const backgroundImage =
    section.backgroundImage?.node;

  const backgroundColor =
    section.backgroundColor ||
    "#0B2F53";
    const contentBackgroundColor =
    section.contentBackgroundColor ||
    "#f3f3f3";
  const stats =
    section.stats ?? [];
  return (
    <section
      className="
        relative
        overflow-hidden
      "
    >
      <div
        className="
          grid
          min-h-[700px]
          grid-cols-1
          lg:grid-cols-2
        "
        style={{backgroundColor}}
      >
        {/* LEFT STATS AREA */}

        <div
          className="
            relative
            flex
            items-center
            overflow-hidden
            px-6
            py-20
            text-white
            md:px-10
            lg:px-16
            xl:px-20
          "
        >
          {/* BACKGROUND IMAGE */}

          {backgroundImage && (
            <Image
              src={
                backgroundImage.sourceUrl
              }
              alt=""
              fill
              sizes="
                (max-width: 1024px) 100vw,
                50vw
              "
              className={`
                object-fill
                object-center
                
                ${section.opacity? "opacity-30":""}
              `}
            />
          )}

          {/* DARK OVERLAY */}

          {section.opacity &&
          <div
            className="
              absolute
              inset-0
              bg-[#ff1c0d]/45
            "
          />}

          {/* DECORATIVE LARGE NUMBER */}

          {stats[0]?.value && (
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
                font-tenor
                text-[clamp(12rem,25vw,34rem)]
                leading-none
                text-[#ff1c0d]/15
                select-none
              "
            >
              {stats[0].value}
            </div>
          )}

          <div
            className="
              relative
              z-10
              grid
              w-full
              grid-cols-2
            "
          >
            {stats.map((stat, index) => {
              const isLeftColumn =
                index % 2 === 0;

              const isLastRow =
                index >= stats.length - 2;

              const numericValue =
                Number(stat.value);

              return (
                <div
                  key={index}
                  className={`
                    px-12

                    ${
                      isLeftColumn
                        ? "border-r border-white/20"
                        : ""
                    }

                    ${
                      !isLastRow
                        ? "border-b border-white/20 pb-22"
                        : ""
                    }

                    ${
                      isLastRow
                        ? "py-22"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      font-tenor
                      text-[80px]
                    "
                  >
                    {!Number.isNaN(numericValue) ? (
                      <AnimatedCounter
                        value={numericValue}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <>
                        {stat.value}
                        {stat.suffix}
                      </>
                    )}

                    {stat.label && (
                      <span
                        className="
                          flex
                          text-[28px]
                        "
                      >
                        {stat.label}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CONTENT AREA */}

        <div
          className="
            flex
            items-center
            px-6
            py-20
            text-[#0B2F53]
            md:px-10
            lg:px-16
            xl:px-20
          "
          style={{backgroundColor:contentBackgroundColor}}
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
                  text-[#ff4c41]
                "
              >
                {section.eyebrow}
              </p>
            )}

            {section.heading && (
              <h2
                className="
                  font-tenor
                  text-[60px]
                  font-normal
                  uppercase
                  leading-[0.9]
                  tracking-[-0.035em]
                  text-black
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
                  text-[#0B2F53]/75

                  [&_p:not(:last-child)]:mb-5
                "
                dangerouslySetInnerHTML={{
                  __html:
                    section.description,
                }}
              />
            )}

            {section.buttons &&
              section.buttons.length >
                0 && (
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
                  {section.buttons.map(
                    (button, index) => {
                      if (
                        !button.buttonText ||
                        !button.buttonLink
                      ) {
                        return null;
                      }

                      return (
                        <Link
                          key={index}
                          href={
                            button.buttonLink
                          }
                          className="
                             group

                flex

                items-center

                gap-4

                relative
                          "
                        >
                          <span>
                            {
                              button.buttonText
                            }
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
                      );
                    }
                  )}
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}