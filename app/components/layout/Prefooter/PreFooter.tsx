import Image from "next/image";

import ContactForm from "@/app/components/forms/ContactForm";

import type {
  PreFooterSettings,
} from "@/app/types/global";

type PreFooterProps = {
  settings: PreFooterSettings;
};

export default function PreFooter({
  settings,
}: PreFooterProps) {
  const mainBackground =
    settings.backgroundImage1?.node;

  const topBackground =
    settings.backgroundImage2?.node;

  const logo =
    settings.logo?.node;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div
        className="
          mx-auto
          w-full
          max-w-[100%]
          px-5
          md:px-8
          lg:px-12
          overflow-hidden
          pb-12
        "
      >

        <div
          className="
            relative
            z-10
            
          "
          style={{backgroundImage:`url(${topBackground.sourceUrl})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
        >
          {/* MAIN BACKGROUND IMAGE */}
            {mainBackground && (
            <Image
              src={mainBackground.sourceUrl}
              alt=""
              fill
              priority={false}
              className="object-cover"
              style={{position:"absolute", top:"170px", left:"120px"}}
            />
          )}
          

          {/* =========================================
              CONTENT POSITION

              Keeps form away from Donna on right
          ========================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[700px]
              w-full
              items-center
              px-6
              py-14
              md:min-h-[760px]
              md:px-12
              lg:min-h-[820px]
              lg:px-16
              xl:px-20
            "
          >
            <div
              className="
                w-full
                lg:w-[62%]
                xl:w-[60%]
              "
            >
              {/* =====================================
                  LOGO
              ====================================== */}

              {logo && (
                <div
                  className="
                    mb-12
                    flex
                    justify-center
                    lg:mb-16
                  "
                >
                  <Image
                    src={logo.sourceUrl}
                    alt={
                      logo.altText ||
                      "Donna Raven"
                    }
                    width={400}
                    height={140}
                    className="
                      h-auto
                      w-[220px]
                      object-contain
                      brightness-0
                      invert
                      md:w-[270px]
                      lg:w-[320px]
                    "
                  />
                </div>
              )}

              {/* =====================================
                  FORM
              ====================================== */}

              <div
                className="
                  mx-auto
                  w-full
                  max-w-[820px]

                  text-white

                  [&_label]:font-mulish
                  [&_label]:text-[11px]
                  [&_label]:font-semibold
                  [&_label]:uppercase
                  [&_label]:tracking-[0.18em]
                  [&_label]:text-white

                  [&_input]:h-[68px]
                  [&_input]:border
                  [&_input]:border-white
                  [&_input]:bg-transparent
                  [&_input]:px-6
                  [&_input]:py-0
                  [&_input]:text-white
                  [&_input]:outline-none

                  [&_textarea]:min-h-[150px]
                  [&_textarea]:border
                  [&_textarea]:border-white
                  [&_textarea]:bg-transparent
                  [&_textarea]:px-6
                  [&_textarea]:py-5
                  [&_textarea]:text-white
                  [&_textarea]:outline-none

                  [&_input:focus]:border-white
                  [&_textarea:focus]:border-white

                  [&_button]:min-w-[190px]
                  [&_button]:border
                  [&_button]:border-white
                  [&_button]:bg-transparent
                  [&_button]:px-8
                  [&_button]:py-4
                  [&_button]:text-white

                  [&_button:hover]:bg-white
                  [&_button:hover]:text-[#ff4c41]
                "
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}