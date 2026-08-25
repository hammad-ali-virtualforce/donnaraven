import Image from "next/image";
import Link from "next/link";

import type {
  StepsSectionData,
} from "@/app/types/page";

type StepsSectionProps = {
  section: StepsSectionData;
};
import {
  ClipboardCheck,
  Landmark,
  House,
  Handshake,
  BookSearch,
  KeyRound,
} from "lucide-react";

const iconMap = {
  "clipboard-check": ClipboardCheck,
  "landmark": Landmark,
  "house-search": House,
  "handshake": Handshake,
  "clipboard-search": BookSearch,
  "key-round": KeyRound,
};



export default function StepsSection({
  section,
}: StepsSectionProps) {
  const steps = section.steps ?? [];

  if (!steps.length) {
    return null;
  }

  return (
    <section
      className="
        bg-white
        py-20
        text-[#0b2f53]
        md:py-28
      "
    >
      {/* HEADER */}

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
        <div
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          {section.eyebrow && (
            <p
              className="
                mb-3
                font-mulish
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
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
                text-[clamp(3rem,5.5vw,6.5rem)]
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
                mx-auto
                mt-8
                max-w-[900px]
                font-mulish
                text-[15px]
                leading-8
                text-[#0b2f53]/75
              "
              dangerouslySetInnerHTML={{
                __html:
                  section.description,
              }}
            />
          )}

          {/* TOP LINKS */}

          <div
            className="
                mt-9
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-10
                gap-y-4
                font-mulish
                text-[18px]
                font-semibold
                uppercase
                tracking-[0.18em]
            "
          >
            {section.primaryLinkText &&
              section.primaryLink && (
                <Link
                  href={
                    section.primaryLink
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
                      section.primaryLinkText
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
              )}

            {section.secondaryLinkText &&
              section.secondaryLink && (
                <Link
                  href={
                    section.secondaryLink
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
                      section.secondaryLinkText
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
              )}
          </div>
        </div>
      </div>

      {/* STEPS */}

      <div
        className="
          mx-auto
          mt-16
          grid
          w-full
          max-w-[1700px]
          grid-cols-1
          gap-px
          px-6
          md:grid-cols-2
          md:px-10
          lg:grid-cols-3
          xl:grid-cols-6
          xl:px-16
        "
      >
        {steps.map(
          (step, index) => {
            const Icon =
            step.icon
                ? iconMap[
                    step.icon as keyof typeof iconMap
                ]
                : null;

            const card = (
              <div
                className="
                  group
                  relative
                  flex
                  min-h-[340px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#ff4c41]
                  px-6
                  py-10
                  text-center
                  text-white
                  transition-all
                  duration-500
                  hover:bg-[#fff]
                  hover:border
                  hover:border-[#ff4c41]
                "
              >
                {/* NUMBER */}

                {step.stepNumber && (
                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      font-mulish
                      text-[15px]
                      font-semibold
                      tracking-[0.18em]
                      text-white
                      group-hover:text-[#000]
                    "
                  >
                    {
                      step.stepNumber
                    }
                  </span>
                )}

                {/* ICON */}

                {Icon && (
                <Icon
                    strokeWidth={1.2}
                    className="
                    h-16
                    w-16
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:text-black
                    "
                />
                )}

                {/* TITLE */}

                {step.title && (
                  <h3
                    className="
                      max-w-[190px]
                      font-tenor
                      text-[20px]
                      uppercase
                      leading-[1.15]
                      tracking-[0.02em]
                      group-hover:text-[#000]
                    "
                  >
                    {step.title}
                  </h3>
                )}

                {/* DESCRIPTION */}

                {step.description && (
                  <p
                    className="
                      mt-5
                      max-w-[220px]
                      font-mulish
                      text-[12px]
                      leading-6
                      text-white/70
                      transition-colors
                      duration-500
                      group-hover:text-[#000]
                    "
                  >
                    {
                      step.description
                    }
                  </p>
                )}

                {/* EXPLORE */}

                {step.link && (
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      font-mulish
                      text-[15px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      text-[#000]
                      relative
                    "
                  >
                    Explore

                    <span
                      className="
                        h-px
                        w-7
                        bg-black
                        transition-all
                        duration-300
                        hover:w-10
                        absolute
                        bottom-[-10px]
                      "
                    />
                  </div>
                )}

                {/* LARGE DECORATIVE STEP */}

                {step.stepNumber && (
                  <span
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-25px]
                      right-[-5px]
                      font-tenor
                      text-[110px]
                      leading-none
                      text-white/[0.035]
                    "
                  >
                    {
                      step.stepNumber
                    }
                  </span>
                )}
              </div>
            );

            if (step.link) {
              return (
                <Link
                  key={index}
                  href={step.link}
                  className="
                    block
                    min-w-0
                  "
                >
                  {card}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="min-w-0"
              >
                {card}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}