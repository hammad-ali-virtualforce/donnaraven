import Image from "next/image";
import Link from "next/link";

import type {
  StepsSectionData,
} from "@/app/types/page-builder";

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
  Trophy,
  ChartLine,
  LayersArrowUp,
} from "lucide-react";

const iconMap = {
  "clipboard-check": ClipboardCheck,
  "landmark": Landmark,
  "house-search": House,
  "handshake": Handshake,
  "clipboard-search": BookSearch,
  "key-round": KeyRound,
  "trophy": Trophy,
  "chart-line": ChartLine,
  "layers-arrow-up" : LayersArrowUp
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
                text-[15px]
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

      {/* STEPS */}

<div
  className="
    mx-auto
    mt-16
    flex
    w-full
    max-w-[1700px]
    flex-wrap
    justify-center
    px-6
    md:px-10
    xl:px-16
    
  "
>
  {steps.map((step, index) => {
    const Icon = step.icon
      ? iconMap[step.icon]
      : null;

    const card = (
      <div
        className="
          group
          relative
          flex
          h-full
          min-h-[360px]
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          
          text-center
          text-white

          transition-all
          duration-500
mx-1
          
        "
        
      >
        <div className="
        
          flex
          h-full
          min-h-[360px]
          w-full
          flex-col
          items-center
          justify-center
          hover:grayscale-[1]
          overflow-hiddenpx-6
          py-10" style={{background:"url('/stepcardsbg.png')",}}>
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

              text-[#white]

              transition-colors
              duration-500

              group-hover:text-white
            "
          >
            {step.stepNumber}
          </span>
        )}

        {/* ICON */}

        {Icon && (
          <Icon
            strokeWidth={1.2}
            className="
              mb-5
              h-16
              w-16

              shrink-0

              text-[#white]

              transition-all
              duration-500

              group-hover:scale-110
              group-hover:text-white
            "
          />
        )}

        {/* TITLE */}

        {step.title && (
          <h3
            className="
              max-w-[200px]

              font-tenor
              text-[20px]
              uppercase
              leading-[1.15]
              tracking-[0.02em]

              transition-colors
              duration-500

              group-hover:text-white
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

              text-white

              transition-colors
              duration-500

              group-hover:text-white
            "
          >
            {step.description}
          </p>
        )}

        {/* EXPLORE */}

        {step.link && (
          <div
            className="
              relative
              mt-6

              flex
              items-center
              justify-center

              font-mulish
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-white

              opacity-0

              transition-all
              duration-500

              group-hover:opacity-100
            "
          >
            Explore

            <span
              className="
                absolute
                bottom-[-10px]
                left-0

                h-px
                w-7

                bg-white

                transition-all
                duration-300

                group-hover:w-full
              "
            />
          </div>
        )}
      </div>
      </div>
    );

    const wrapperClass = `
      flex
      w-full

      md:w-1/2
      lg:w-1/3
      xl:w-1/6
    `;

    if (step.link) {
      return (
        <Link
          key={index}
          href={step.link}
          className={wrapperClass}
        >
          {card}
        </Link>
      );
    }

    return (
      <div
        key={index}
        className={wrapperClass}
      >
        {card}
      </div>
    );
  })}
</div>
    </section>
  );
}