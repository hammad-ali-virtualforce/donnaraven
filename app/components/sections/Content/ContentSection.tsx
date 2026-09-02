import type {
  ContentSectionData,
} from "@/app/types/page-builder";

type ContentSectionProps = {
  section: ContentSectionData;
};

export default function ContentSection({
  section,
}: ContentSectionProps) {
  const {
    eyebrow,
    heading,
    content,
    contentWidth = "medium",
  } = section;

  if (!eyebrow && !heading && !content) {
    return null;
  }

  const widthClass = {
    narrow: "max-w-[760px]",
    medium: "max-w-[950px]",
    wide: "max-w-[1200px]",
  }[contentWidth ?? "medium"];

  return (
    <section
      className="
        bg-white
        px-6
        py-32
        text-[#0b2f53]
        md:px-10
        lg:px-16
      "
    >
      <div
        className={`
          mx-auto
          w-full
          ${widthClass}
        `}
      >
        {/* SECTION HEADING */}
        {(eyebrow || heading) && (
          <div className="mb-10 md:mb-12">
            {eyebrow && (
              <p
                className="
                  mb-4
                  font-mulish
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#ff1c0d]
                "
              >
                {eyebrow}
              </p>
            )}

            {heading && (
              <h2
                className="
                  max-w-[850px]
                  font-tenor
                  text-[36px]
                  uppercase
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-[#0b2f53]
                  md:text-[46px]
                  lg:text-[54px]
                "
              >
                {heading}
              </h2>
            )}
          </div>
        )}

        {/* WYSIWYG CONTENT */}
        {content && (
          <div
            className="
              font-mulish
              text-[16px]
              leading-[1.9]
              text-[#0b2f53]/75

              [&_p]:mb-7

              [&_h2]:mb-6
              [&_h2]:mt-14
              [&_h2:first-child]:mt-0
              [&_h2]:font-tenor
              [&_h2]:text-[36px]
              [&_h2]:uppercase
              [&_h2]:leading-[1.08]
              [&_h2]:tracking-[-0.025em]
              [&_h2]:text-[#0b2f53]
              md:[&_h2]:text-[46px]

              [&_h3]:mb-4
              [&_h3]:mt-10
              [&_h3]:font-tenor
              [&_h3]:text-[27px]
              [&_h3]:uppercase
              [&_h3]:leading-[1.15]
              [&_h3]:text-[#0b2f53]
              md:[&_h3]:text-[32px]

              [&_h4]:mb-4
              [&_h4]:mt-9
              [&_h4]:font-tenor
              [&_h4]:text-[22px]
              [&_h4]:uppercase
              [&_h4]:text-[#0b2f53]

              [&_strong]:font-bold
              [&_strong]:text-[#0b2f53]

              [&_a]:font-semibold
              [&_a]:text-[#ff1c0d]
              [&_a]:underline
              [&_a]:decoration-[#ff1c0d]/35
              [&_a]:underline-offset-4
              hover:[&_a]:decoration-[#ff1c0d]

              [&_ul]:mb-8
              [&_ul]:ml-5
              [&_ul]:list-disc
              [&_ul]:space-y-3

              [&_ol]:mb-8
              [&_ol]:ml-5
              [&_ol]:list-decimal
              [&_ol]:space-y-3

              [&_li]:pl-1
              [&_li::marker]:text-[#ff1c0d]

              [&_blockquote]:my-10
              [&_blockquote]:border-l-[3px]
              [&_blockquote]:border-[#ff1c0d]
              [&_blockquote]:pl-7
              [&_blockquote]:font-tenor
              [&_blockquote]:text-[25px]
              [&_blockquote]:leading-[1.5]
              [&_blockquote]:text-[#0b2f53]

              [&_hr]:my-12
              [&_hr]:border-[#0b2f53]/10

              [&_img]:my-10
              [&_img]:h-auto
              [&_img]:w-full
            "
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        )}
      </div>
    </section>
  );
}