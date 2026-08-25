"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type {
  ExpertiseSectionData,
} from "@/app/types/page";

type ExpertiseSectionProps = {
  section: ExpertiseSectionData;
};

export default function ExpertiseSection({
  section,
}: ExpertiseSectionProps) {
  const areas = section.areas ?? [];

  const defaultImage =
    section.defaultImage?.node;

  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  return (
    <section
      className="
        bg-white
        py-20
        text-[#0b2f53]
        md:py-28
      "
    >
      {/* =========================
          HEADING
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
        <div className="mb-10 text-center">
          {section.eyebrow && (
            <p
              className="
                mb-2
                font-mulish
                text-[9px]
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
                text-[clamp(3rem,5vw,5.8rem)]
                uppercase
                leading-[0.9]
                tracking-[-0.035em]
              "
            >
              {section.heading}
            </h2>
          )}
        </div>
      </div>

      {/* =========================
          EXPERTISE AREA
      ========================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-[#0b2f53]
        "
        onMouseLeave={() =>
          setActiveIndex(null)
        }
      >
        {/* =========================
            DEFAULT FULL IMAGE
        ========================== */}

        {defaultImage && (
          <Image
            src={defaultImage.sourceUrl}
            alt={
              defaultImage.altText || ""
            }
            fill
            sizes="100vw"
            className={`
              absolute
              inset-0
              z-0
              object-cover
              transition-opacity
              duration-700
              ease-in-out

              ${
                activeIndex === null
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        )}

        {/* =========================
            ACTIVE LOCATION
            FULL GRID IMAGE
        ========================== */}

        {areas.map((area, index) => {
          const image =
            area.image?.node;

          if (!image) return null;

          return (
            <Image
              key={`full-bg-${image.id}-${index}`}
              src={image.sourceUrl}
              alt={
                image.altText ||
                area.areaName ||
                ""
              }
              fill
              sizes="100vw"
              className={`
                absolute
                inset-0
                z-0
                object-cover
                transition-opacity
                duration-700
                ease-in-out

                ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />
          );
        })}

        {/* =========================
            FULL GRID OVERLAY

            Very light overall overlay.
            Remove this entirely if you
            want the full image untouched.
        ========================== */}

        <div
          className={`
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-black
            transition-opacity
            duration-700

            ${
              activeIndex !== null
                ? "opacity-10"
                : "opacity-0"
            }
          `}
        />

        {/* =========================
            GRID
        ========================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-2
            md:grid-cols-4
          "
        >
          {areas.map((area, index) => {
            const cardImage =
              area.image?.node;

            const isActive =
              activeIndex === index;

            const isHovering =
              activeIndex !== null;

            const content = (
              <div
                className="
                  group
                  relative
                  flex
                  min-h-[300px]
                  w-full
                  items-end
                  overflow-hidden
                  px-7
                  py-8
                  md:min-h-[340px]
                  lg:min-h-[380px]
                  lg:px-9
                  lg:py-10
                "
                onMouseEnter={() =>
                  setActiveIndex(index)
                }
                onFocus={() =>
                  setActiveIndex(index)
                }
              >
                {/* =====================
                    INDIVIDUAL CARD IMAGE

                    When ANY card is
                    hovered all card
                    images fade to 0,
                    revealing the active
                    full-grid image.
                ====================== */}

                {cardImage && (
                  <Image
                    src={
                      cardImage.sourceUrl
                    }
                    alt={
                      cardImage.altText ||
                      area.areaName ||
                      ""
                    }
                    fill
                    sizes="
                      (max-width: 767px) 50vw,
                      25vw
                    "
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      z-0
                      object-cover
                      transition-opacity
                      duration-700
                      ease-in-out

                      ${
                        isHovering
                          ? "opacity-0"
                          : "opacity-100"
                      }
                    `}
                  />
                )}

                {/* =====================
                    NORMAL CARD OVERLAY

                    Visible only before
                    any hover begins.
                ====================== */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-[1]
                    bg-[#0b2f53]/35
                    transition-opacity
                    duration-700

                    ${
                      isHovering
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  `}
                />

                {/* =====================
                    ACTIVE CARD
                    READABILITY OVERLAY

                    Only hovered card gets
                    the darker navy layer.
                ====================== */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-[2]
                    bg-[#0b2f53]
                    transition-opacity
                    duration-500
                    ease-out

                    ${
                      isActive
                        ? "opacity-65"
                        : "opacity-0"
                    }
                  `}
                />

                {/* =====================
                    ACTIVE CARD
                    BOTTOM GRADIENT

                    Adds extra contrast
                    behind description.
                ====================== */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-[2]
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    transition-opacity
                    duration-500

                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />

                {/* =====================
                    GRID BORDER
                ====================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[3]
                    border-b
                    border-r
                    border-white/50
                  "
                />

                {/* =====================
                    HOVER ACCENT
                ====================== */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-[4]
                    h-[3px]
                    bg-[#ff4c41]
                    transition-all
                    duration-500

                    ${
                      isActive
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />

                {/* =====================
                    CONTENT
                ====================== */}

                <div
                  className="
                    relative
                    z-[5]
                    w-full
                    text-white
                  "
                >
                  {/* AREA NAME */}

                  <h3
                    className={`
                      font-tenor
                      text-[20px]
                      uppercase
                      leading-tight
                      tracking-[0.04em]
                      transition-transform
                      duration-500
                      md:text-[22px]

                      ${
                        isActive
                          ? "-translate-y-3"
                          : "translate-y-0"
                      }
                    `}
                  >
                    {area.areaName}
                  </h3>

                  {/* =====================
                      HOVER CONTENT
                  ====================== */}

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-out

                      ${
                        isActive
                          ? "mt-3 max-h-[220px] translate-y-0 opacity-100"
                          : "mt-0 max-h-0 translate-y-5 opacity-0"
                      }
                    `}
                  >
                    {area.description && (
                      <p
                        className="
                          mb-5
                          max-w-[290px]
                          font-mulish
                          text-[16px]
                          font-light
                          leading-[1.7]
                          text-white/90
                        "
                      >
                        {area.description}
                      </p>
                    )}

                    {area.link && (
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-4
                          font-mulish
                          text-[15px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white
                        "
                      >
                        Explore

                        <span
                          className="
                            block
                            h-px
                            w-8
                            bg-[#ff4c41]
                            transition-all
                            duration-300
                            group-hover:w-12
                          "
                        />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            if (area.link) {
              return (
                <Link
                  key={`area-${index}`}
                  href={area.link}
                  className="
                    block
                    min-w-0
                    w-full
                  "
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={`area-${index}`}
                className="
                  min-w-0
                  w-full
                "
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}