"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type {
  StepsSectionData,
} from "@/app/types/page-builder";

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

type StepsSectionProps = {
  section: StepsSectionData;
};

const iconMap = {
  "clipboard-check": ClipboardCheck,
  landmark: Landmark,
  "house-search": House,
  handshake: Handshake,
  "clipboard-search": BookSearch,
  "key-round": KeyRound,
  trophy: Trophy,
  "chart-line": ChartLine,
  "layers-arrow-up": LayersArrowUp,
};

function normalizePath(path: string) {
  if (!path) {
    return "";
  }

  let normalizedPath = path;

  /*
   * If ACF ever returns a full URL,
   * convert it to pathname only.
   *
   * Example:
   * https://example.com/buyers/deciding-to-buy/
   * becomes:
   * /buyers/deciding-to-buy/
   */
  try {
    if (
      normalizedPath.startsWith("http://") ||
      normalizedPath.startsWith("https://")
    ) {
      normalizedPath = new URL(
        normalizedPath
      ).pathname;
    }
  } catch {
    // Keep original value if URL parsing fails
  }

  /*
   * Remove query string
   */
  normalizedPath =
    normalizedPath.split("?")[0];

  /*
   * Remove hash
   */
  normalizedPath =
    normalizedPath.split("#")[0];

  /*
   * Remove trailing slash
   *
   * /buyers/deciding-to-buy/
   * becomes
   * /buyers/deciding-to-buy
   */
  normalizedPath =
    normalizedPath.replace(/\/+$/, "");

  /*
   * Keep homepage as /
   */
  return normalizedPath || "/";
}

export default function StepsSection({
  section,
}: StepsSectionProps) {
  const pathname = usePathname();

  const steps = section.steps ?? [];

  const currentPath =
    normalizePath(pathname);

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
          {/* EYEBROW */}

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

          {/* HEADING */}

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

          {/* DESCRIPTION */}

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

          {(section.primaryLinkText &&
            section.primaryLink) ||
          (section.secondaryLinkText &&
            section.secondaryLink) ? (
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
              {/* PRIMARY LINK */}

              {section.primaryLinkText &&
                section.primaryLink && (
                  <Link
                    href={
                      section.primaryLink
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
                      {
                        section.primaryLinkText
                      }
                    </span>

                    <span
                      className="
                        absolute
                        bottom-[-10px]
                        left-0
                        block
                        h-[3px]
                        w-8
                        bg-[#ff4c41]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                )}

              {/* SECONDARY LINK */}

              {section.secondaryLinkText &&
                section.secondaryLink && (
                  <Link
                    href={
                      section.secondaryLink
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
                      {
                        section.secondaryLinkText
                      }
                    </span>

                    <span
                      className="
                        absolute
                        bottom-[-10px]
                        left-0
                        block
                        h-[3px]
                        w-8
                        bg-[#ff4c41]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                )}
            </div>
          ) : null}
        </div>
      </div>

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
          /*
           * ICON
           */

          const Icon = step.icon
            ? iconMap[
                step.icon as keyof typeof iconMap
              ]
            : null;

          /*
           * CURRENT STEP CHECK
           */

          const stepPath = step.link
            ? normalizePath(step.link)
            : "";

          const isActive =
            Boolean(stepPath) &&
            currentPath === stepPath;

          /*
           * CARD
           */

          const card = (
            <div
              className={`
                group
                relative
                mx-1
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

                ${
                  isActive
                    ? "active-step"
                    : ""
                }
              `}
            >
              <div
                className={`
                  relative
                  flex
                  h-full
                  min-h-[360px]
                  w-full
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  px-6
                  py-10
                  transition-all
                  duration-500

                  ${
                    isActive
                      ? "grayscale-[1]"
                      : "hover:grayscale-[1]"
                  }
                `}
                style={{
                  backgroundImage:
                    "url('/stepcardsbg.png')",
                  backgroundSize: "cover",
                  backgroundPosition:
                    "center",
                  backgroundRepeat:
                    "no-repeat",
                }}
              >
                {/* ACTIVE OVERLAY */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-0
                    bg-[#ff4c41]
                    transition-opacity
                    duration-500

                    ${
                      isActive
                        ? "opacity-40"
                        : "opacity-0"
                    }
                  `}
                />

                {/* ACTIVE BORDER */}

                <span
                  className={`
                    absolute
                    left-0
                    top-0
                    z-20
                    h-[5px]
                    bg-[#ff4c41]
                    transition-all
                    duration-500

                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />

                {/* NUMBER */}

                {step.stepNumber && (
                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      z-10

                      font-mulish
                      text-[15px]
                      font-semibold
                      tracking-[0.18em]

                      text-white

                      transition-colors
                      duration-500
                    "
                  >
                    {step.stepNumber}
                  </span>
                )}

                {/* ICON */}

                {Icon && (
                  <Icon
                    strokeWidth={1.2}
                    className={`
                      relative
                      z-10

                      mb-5
                      h-16
                      w-16

                      shrink-0

                      text-white

                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }
                    `}
                  />
                )}

                {/* TITLE */}

                {step.title && (
                  <h3
                    className="
                      relative
                      z-10

                      max-w-[200px]

                      font-tenor
                      text-[20px]
                      uppercase
                      leading-[1.15]
                      tracking-[0.02em]

                      text-white

                      transition-colors
                      duration-500
                    "
                  >
                    {step.title}
                  </h3>
                )}

                {/* DESCRIPTION */}

                {step.description && (
                  <p
                    className="
                      relative
                      z-10

                      mt-5
                      max-w-[220px]

                      font-mulish
                      text-[12px]
                      leading-6

                      text-white
                    "
                  >
                    {step.description}
                  </p>
                )}

                {/* EXPLORE */}

                {step.link && (
                  <div
                    className={`
                      relative
                      z-10

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

                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  >
                    {isActive
                      ? ""
                      : "Explore"}

                    <span
                      className={`
                        absolute
                        bottom-[-10px]
                        left-0

                        h-px
                        bg-white

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "w-full"
                            : "w-7 group-hover:w-full"
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            </div>
          );

          /*
           * WIDTH
           *
           * 6 cards =
           * 1 card mobile
           * 2 tablet
           * 3 small desktop
           * 6 desktop
           */

          const wrapperClass = `
            flex
            w-full

            md:w-1/2
            lg:w-1/3
            xl:w-1/6
          `;

          /*
           * LINK CARD
           */

          if (step.link) {
            return (
              <Link
                key={`${step.link}-${index}`}
                href={step.link}
                className={wrapperClass}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
              >
                {card}
              </Link>
            );
          }

          /*
           * NON-LINK CARD
           */

          return (
            <div
              key={`${step.title}-${index}`}
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