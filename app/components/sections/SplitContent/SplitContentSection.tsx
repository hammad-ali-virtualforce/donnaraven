import Image from "next/image";
import Link from "next/link";

import type {
  SplitContentSectionData,
} from "@/app/types/page-builder";

type SplitContentSectionProps = {
  section: SplitContentSectionData;
};

export default function SplitContentSection({
  section,
}: SplitContentSectionProps) {
  const image =
    section.image?.node;

  const imageOnLeft =
    section.imagePosition?.[0] ===
    "left";

  const backgroundColor =
    section.backgroundColor ||
    "#ffffff";

  const textColor =
    section.textColor ||
    "#0b2f53";
  return (
    <section
      style={{
        backgroundColor,
        color: textColor,
      }}
      className="
      "
    >
      <div
        className="
          grid
          min-h-[650px]
          grid-cols-1
          lg:grid-cols-2
        "
      >
        {/* CONTENT */}

        <div
          className={`
            flex
            items-center
            px-6
            py-20
            md:px-10
            lg:px-16
            xl:px-24
            ${
              imageOnLeft
                ? "lg:order-2"
                : "lg:order-1"
            }
          `}
        >
          <div className="w-full max-w-[620px]">
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
                  text-[clamp(3rem,5vw,6.5rem)]
                  font-normal
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
                  opacity-80

                  [&_p:not(:last-child)]:mb-5
                  [&_ul]:my-5
                  [&_ul]:list-disc
                  [&_ul]:pl-5
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

        {/* IMAGE */}

        <div
          className={`
            relative
            min-h-[500px]
            lg:min-h-full
            ${
              imageOnLeft
                ? "lg:order-1"
                : "lg:order-2"
            }
          `}
        >
          {image ? (
            <>
              <Image
                src={image.sourceUrl}
                alt={
                  image.altText ||
                  section.heading ||
                  ""
                }
                width="100"
                height="100"
                sizes="
                  (max-width: 1024px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  
                "
                style={{left:"-10%",height:"110%",minWidth:"110%",position:"absolute",zIndex:"1"}}
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  to-transparent
                "
              />
            </>
          ) : (
            <div
              className="
                h-full
                w-full
                bg-[#f3f3f3]
              "
            />
          )}
        </div>
      </div>
    </section>
  );
}