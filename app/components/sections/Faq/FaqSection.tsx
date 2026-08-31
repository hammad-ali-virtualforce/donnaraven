"use client";

import {
  useState,
} from "react";

import type {
  FaqSectionData,
} from "@/app/types/page-builder";

type FaqSectionProps = {
  section: FaqSectionData;
};

export default function FaqSection({
  section,
}: FaqSectionProps) {
  const groups =
    section.faqGroups?.filter(Boolean) ??
    [];

  if (!groups.length) {
    return null;
  }

  return (
    <section
      className="
        bg-white
        text-[#0b2f53]
        py-32
      "
    >
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
        {/* =========================
            INTRO
        ========================= */}

        <div
          className="
            mx-auto
            mb-14
            max-w-[900px]
            text-center
            md:mb-18
          "
        >
          {section.eyebrow && (
            <p
              className="
                mb-4
                font-mulish
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#ff1c0d]
              "
            >
              {section.eyebrow}
            </p>
          )}

          {section.heading && (
            <h2
              className="
                font-tenor
                text-[clamp(2.8rem,5vw,5.8rem)]
                uppercase
                leading-[0.92]
                tracking-[-0.035em]
                text-[#0b2f53]
              "
            >
              {section.heading}
            </h2>
          )}

          {section.description && (
            <div
              className="
                mx-auto
                mt-6
                max-w-[720px]
                font-mulish
                text-[15px]
                leading-7
                text-[#0b2f53]/70

                [&_p:not(:last-child)]:mb-4
              "
              dangerouslySetInnerHTML={{
                __html:
                  section.description,
              }}
            />
          )}
        </div>

        {/* =========================
            FAQ GROUPS
        ========================= */}

        <div
          className="
            mx-auto
            max-w-[1100px]
          "
        >
          {groups.map(
            (group, groupIndex) => {
              const faqs =
                group.faqs?.filter(
                  Boolean
                ) ?? [];

              if (!faqs.length) {
                return null;
              }

              return (
                <div
                  key={`${group.groupTitle}-${groupIndex}`}
                  className="
                    border-t
                    border-[#0b2f53]/15
                    py-12
                    first:border-t-0
                    first:pt-0
                    md:py-14
                  "
                >
                  {/* GROUP TITLE */}

                  <div
                    className="
                      mb-8
                      md:mb-10
                    "
                  >
                    {group.groupTitle && (
                      <h3
                        className="
                          font-tenor
                          text-[30px]
                          uppercase
                          leading-[1]
                          tracking-[-0.02em]
                          text-[#0b2f53]
                          md:text-[36px]
                        "
                      >
                        {
                          group.groupTitle
                        }
                      </h3>
                    )}

                    {group.groupDescription && (
                      <p
                        className="
                          mt-4
                          max-w-[680px]
                          font-mulish
                          text-[14px]
                          leading-7
                          text-[#0b2f53]/65
                        "
                      >
                        {
                          group.groupDescription
                        }
                      </p>
                    )}
                  </div>

                  {/* FAQ ITEMS */}

                  <div
                    className="
                      border-t
                      border-[#0b2f53]/15
                    "
                  >
                    {faqs.map(
                      (faq, faqIndex) => (
                        <FaqItem
                          key={`${faq.question}-${faqIndex}`}
                          question={
                            faq.question
                          }
                          answer={
                            faq.answer
                          }
                        />
                      )
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

type FaqItemProps = {
  question: string | null;
  answer: string | null;
};

function FaqItem({
  question,
  answer,
}: FaqItemProps) {
  const [isOpen, setIsOpen] =
    useState(false);

  if (!question) {
    return null;
  }

  return (
    <div
      className="
        border-b
        border-[#0b2f53]/15
      "
    >
      <button
        type="button"
        onClick={() =>
          setIsOpen(
            (previous) => !previous
          )
        }
        aria-expanded={isOpen}
        className="
          group
          flex
          w-full
          items-center
          justify-between
          gap-8
          py-6
          text-left
          md:py-7
        "
      >
        <span
          className="
            font-tenor
            text-[20px]
            leading-[1.3]
            text-[#0b2f53]
            transition-colors
            duration-300
            group-hover:text-[#ff1c0d]
            md:text-[23px]
          "
        >
          {question}
        </span>

        {/* PLUS / MINUS */}

        <span
          className="
            relative
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
          "
        >
          <span
            className="
              absolute
              h-[2px]
              w-5
              bg-[#ff1c0d]
            "
          />

          <span
            className={`
              absolute
              h-5
              w-[2px]
              bg-[#ff1c0d]
              transition-transform
              duration-300

              ${
                isOpen
                  ? "rotate-90 opacity-0"
                  : "rotate-0 opacity-100"
              }
            `}
          />
        </span>
      </button>

      {/* ANSWER */}

      <div
        className={`
          grid
          transition-[grid-template-rows]
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          {answer && (
            <div
              className="
                max-w-[880px]
                pb-7
                pr-10
                font-mulish
                text-[14px]
                leading-7
                text-[#0b2f53]/70
                md:pb-8
                md:text-[15px]

                [&_a]:text-[#ff1c0d]
                [&_a]:underline
                [&_ol]:ml-5
                [&_ol]:list-decimal
                [&_ol]:space-y-2
                [&_p:not(:last-child)]:mb-4
                [&_ul]:ml-5
                [&_ul]:list-disc
                [&_ul]:space-y-2
              "
              dangerouslySetInnerHTML={{
                __html: answer,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}