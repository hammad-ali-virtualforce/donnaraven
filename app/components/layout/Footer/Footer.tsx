import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import type { MenuItem } from "@/app/types/menu";

import type {
  Branding,
  ContactInformation,
  FooterSettings,
  SocialLink,
} from "@/app/types/global";

type FooterProps = {
  menu: MenuItem[];
  branding: Branding;
  contact: ContactInformation;
  socials: SocialLink[];
  settings: FooterSettings;
};

function SocialIcon({
  platform,
}: {
  platform: string;
}) {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <FaFacebookF />;

    case "twitter":
      return <FaXTwitter />;

    case "linkedin":
      return <FaLinkedinIn />;

    case "tiktok":
      return <FaTiktok />;

    case "youtube":
      return <FaYoutube />;

    default:
      return null;
  }
}

export default function Footer({
  menu,
  branding,
  contact,
  socials,
  settings,
}: FooterProps) {
  // Footer only shows top-level hamburger menu items.
  const topLevelItems = menu.filter(
    (item) => !item.parentId
  );
  const footerLogo =
    settings.footerLogo?.node ||
    branding.siteLogo?.node;

  const companyLogo =
    settings.companyLogo?.node;

  return (
    <footer
      className="
        bg-white
        text-[#0b2f53]
      "
    >
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
        {/* TOP LOGO */}

        <div className="pt-8">
          <div className="flex items-center gap-8">
            <div className="h-px flex-1 bg-[#0b2f53]/10" />

            {footerLogo ? (
              <Link
                href="/"
                className="shrink-0"
              >
                <Image
                  src={footerLogo.sourceUrl}
                  alt={
                    footerLogo.altText ||
                    branding.siteName ||
                    "Logo"
                  }
                  width={420}
                  height={130}
                  className="
                    h-auto
                    w-[230px]
                    object-contain
                    sm:w-[280px]
                    lg:w-[360px]
                  "
                />
              </Link>
            ) : (
              <Link
                href="/"
                className="
                  shrink-0
                  font-tenor
                  text-2xl
                  uppercase
                  tracking-[0.18em]
                "
              >
                {branding.siteName}
              </Link>
            )}

            <div className="h-px flex-1 bg-[#0b2f53]/10" />
          </div>
        </div>

        {/* CONTACT ROW */}

        <div
          className="
            grid
            gap-12
            py-20
            text-center
            md:grid-cols-3
            md:gap-8
            lg:py-24
          "
        >
          {/* PHONE + EMAIL */}

          <div>
            <h3
              className="
                mb-10
                font-tenor
                text-[17px]
                uppercase
                tracking-[0.11em]
              "
            >
              Phone & Email.
            </h3>

            <div
              className="
                space-y-4
                font-mulish
                text-[14px]
                tracking-[0.08em]
                text-[#222]
              "
            >
              {contact.phoneNumber && (
                <a
                  href={
                    contact.phoneLink ||
                    "#"
                  }
                  className="
                    block
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  {contact.phoneNumber}
                </a>
              )}

              {contact.emailAddress && (
                <a
                  href={`mailto:${contact.emailAddress}`}
                  className="
                    block
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  {contact.emailAddress}
                </a>
              )}
            </div>
          </div>

          {/* LICENSE + SOCIALS */}

          <div>
            {contact.licenseNumber && (
              <h3
                className="
                  mb-9
                  font-tenor
                  text-[17px]
                  uppercase
                  tracking-[0.11em]
                "
              >
                License #.{" "}
                {contact.licenseNumber}
              </h3>
            )}

            {socials.length > 0 && (
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-6
                  text-[17px]
                "
              >
                {socials.map(
                  (social, index) => {
                    const platform =
                      social.platform?.[0];

                    if (
                      !platform ||
                      !social.url
                    ) {
                      return null;
                    }

                    return (
                      <a
                        key={`${platform}-${index}`}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={platform}
                        className="
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:opacity-60
                        "
                      >
                        <SocialIcon
                          platform={platform}
                        />
                      </a>
                    );
                  }
                )}
              </div>
            )}
          </div>

          {/* LOCATION */}

          <div>
            <h3
              className="
                mb-10
                font-tenor
                text-[17px]
                uppercase
                tracking-[0.11em]
              "
            >
              Location.
            </h3>

            {contact.officeAddress && (
              <>
                {contact.googleMapsUrl ? (
                  <a
                    href={
                      contact.googleMapsUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mx-auto
                      block
                      max-w-[320px]
                      whitespace-pre-line
                      font-mulish
                      text-[14px]
                      leading-7
                      tracking-[0.08em]
                      text-[#222]
                      transition-opacity
                      hover:opacity-60
                    "
                  >
                    {contact.officeAddress}
                  </a>
                ) : (
                  <p
                    className="
                      mx-auto
                      max-w-[320px]
                      whitespace-pre-line
                      font-mulish
                      text-[14px]
                      leading-7
                      tracking-[0.08em]
                      text-[#222]
                    "
                  >
                    {contact.officeAddress}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* COMPANY LOGO */}

        {companyLogo && (
          <div
            className="
              flex
              justify-center
              pb-14
            "
          >
            {settings.companyLogoLink ? (
              <a
                href={
                  settings.companyLogoLink
                }
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    companyLogo.sourceUrl
                  }
                  alt={
                    companyLogo.altText ||
                    ""
                  }
                  width={260}
                  height={100}
                  className="
                    h-auto
                    w-[190px]
                    object-contain
                    lg:w-[230px]
                  "
                />
              </a>
            ) : (
              <Image
                src={
                  companyLogo.sourceUrl
                }
                alt={
                  companyLogo.altText ||
                  ""
                }
                width={260}
                height={100}
                className="
                  h-auto
                  w-[190px]
                  object-contain
                  lg:w-[230px]
                "
              />
            )}
          </div>
        )}

        {/* FOOTER MENU */}

        <nav className="pb-7">
          <ul
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-10
              gap-y-4
              md:gap-x-14
              lg:gap-x-16
            "
          >
            {topLevelItems.map(
              (item) => (
                <li key={item.id}>
                  <Link
                    href={
                      item.path ||
                      "#"
                    }
                    target={
                      item.target ||
                      undefined
                    }
                    className="
                      font-mulish
                      text-[13px]
                      uppercase
                      tracking-[0.15em]
                      transition-opacity
                      hover:opacity-50
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* MLS DISCLAIMER */}

        {settings.mlsDisclaimer && (
          <div className="pb-5">
            <p
              className="
                mx-auto
                max-w-[1300px]
                text-center
                font-mulish
                text-[11px]
                leading-5
                tracking-[0.02em]
                text-[#555]
              "
            >
              {settings.mlsDisclaimer}
            </p>
          </div>
        )}

        {/* COPYRIGHT / LEGAL */}

        <div
          className="
            pb-7
            text-center
            font-mulish
            text-[11px]
            leading-6
            text-[#555]
          "
        >
         

          {settings.dmcaDisclaimer && (
            <p className="mt-2">
              {settings.dmcaDisclaimer}
            </p>
          )}
        </div>

        {/* SUPPORTING LOGOS */}

        {settings.supportingLogos &&
          settings.supportingLogos
            .length > 0 && (
            <div
              className="
                flex
                md:flex-wrap
                items-center
                justify-center
                gap-5
                pb-10
              "
            >
              {settings.supportingLogos.map(
                (item, index) => {
                  const logo =
                    item.logoImage?.node;

                  if (!logo) {
                    return null;
                  }

                  const image = (
                    <Image
                      src={
                        logo.sourceUrl
                      }
                      alt={
                        logo.altText ||
                        ""
                      }
                      width={150}
                      height={70}
                      className="
                        h-[110px]
                        w-auto
                        object-contain
                        opacity-70
                        grayscale
                      "
                    />
                  );

                  if (
                    item.logoLink
                  ) {
                    return (
                      <a
                        key={index}
                        href={
                          item.logoLink
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          transition-opacity
                          hover:opacity-60
                        "
                      >
                        {image}
                      </a>
                    );
                  }

                  return (
                    <div key={index}>
                      {image}
                    </div>
                  );
                }
              )}
            </div>
          )}
      </div>
      <nav className="">
          <ul
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-10
              gap-y-4
              md:gap-x-14
              lg:gap-x-16
            "
          >
                <li>
                  <Link
                    href="/https://insiderealestate.com/"
                    target="_blank"
                    className="
                      font-mulish
                      text-[13px]
                      uppercase
                      tracking-[0.15em]
                      transition-opacity
                      hover:opacity-50
                    "
                  >
                    © 2026 Inside Real Estate
                   
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-use"
                    className="
                      font-mulish
                      text-[13px]
                      uppercase
                      tracking-[0.15em]
                      transition-opacity
                      hover:opacity-50
                    "
                  >
                    Terms of Use
                   
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="
                      font-mulish
                      text-[13px]
                      uppercase
                      tracking-[0.15em]
                      transition-opacity
                      hover:opacity-50
                    "
                  >
                    Privacy Policy
                   
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessibility"
                    className="
                      font-mulish
                      text-[13px]
                      uppercase
                      tracking-[0.15em]
                      transition-opacity
                      hover:opacity-50
                    "
                  >
                    Accessibility
                   
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fair-housing-statement"
                    className="
                      font-mulish
                      text-[13px]
                      uppercase
                      tracking-[0.15em]
                      transition-opacity
                      hover:opacity-50
                    "
                  >
                    Fair Housing Statement
                   
                  </Link>
                </li>
              
          </ul>
        </nav>
      <div className="flex justify-center items-center py-8 text-center">
        <p>
            {settings.copyright ||
              `© ${new Date().getFullYear()} ${
                branding.siteName ||
                "Donna Raven"
              }. All rights reserved.`}
          </p>
      </div>
    </footer>
  );
}