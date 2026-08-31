import Image from "next/image";

import ContactForm from "@/app/components/forms/ContactForm";

import type {
  ContactSectionData,
} from "@/app/types/page-builder";

type ContactSectionProps = {
  section: ContactSectionData;
};

export default function ContactSection({
  section,
}: ContactSectionProps) {
  const image =
    section.image?.node;

  return (
    <section className="bg-white text-[#0b2f53] py-24">
      <div
        className="
          grid
          min-h-[760px]
          grid-cols-1
          lg:grid-cols-[40%_60%]
        "
      >
        {/* =========================
            LEFT IMAGE
        ========================= */}

        <div
          className="
            relative
            min-h-[420px]
            overflow-hidden
            lg:min-h-full
          "
        >
          {image && (
            <Image
              src={image.sourceUrl}
              alt={image.altText || ""}
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="
                object-cover
                object-center
              "
            />
          )}
        </div>

        {/* =========================
            RIGHT CONTENT + FORM
        ========================= */}

        <div
          className="
            flex
            items-center
            px-6
            py-14
            md:px-10
            md:py-16
            lg:px-14
            lg:py-20
            xl:px-20
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[820px]
            "
          >
            {/* EYEBROW */}

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

            {/* HEADING */}

            {section.heading && (
              <h1
                className="
                  max-w-[760px]
                  font-tenor
                  text-[clamp(3rem,5vw,5.5rem)]
                  uppercase
                  leading-[0.92]
                  tracking-[-0.035em]
                  text-[#0b2f53]
                "
              >
                {section.heading}
              </h1>
            )}

            {/* DESCRIPTION */}

            {section.description && (
              <div
                className="
                  mt-6
                  max-w-[700px]
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

            {/* FORM */}

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MAP
      ========================= */}

      {section.showMap &&
        section.mapEmbedUrl && (
          <div className="w-full">
            <iframe
              src={
                section.mapEmbedUrl
              }
              className="
                block
                h-[380px]
                w-full
                border-0
                md:h-[460px]
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location"
            />
          </div>
        )}
    </section>
  );
}