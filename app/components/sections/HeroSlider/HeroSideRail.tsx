"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
} from "react-icons/fi";

import type {
  ContactInformation,
  SocialLink,
} from "@/app/types/global";
import { FaXTwitter } from "react-icons/fa6";

type HeroSideRailProps = {
  contact: ContactInformation;
  socials: SocialLink[];
};

function SocialIcon({
  platform,
}: {
  platform: string;
}) {
  switch (
    platform.toLowerCase()
  ) {
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

export default function HeroSideRail({
  contact,
  socials,
}: HeroSideRailProps) {
  return (
    <>
      {/* DESKTOP */}

      <aside
        className="
          absolute
          left-0
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          flex-col
          items-center
          text-white
          lg:flex
        "
      >
        <div
          className="
            flex
            w-[78px]
            flex-col
            items-center
            gap-7
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
                    text-[17px]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:opacity-60
                  "
                >
                  <SocialIcon
                    platform={
                      platform
                    }
                  />
                </a>
              );
            }
          )}

          <span
            className="
              my-1
              block
              h-[70px]
              w-px
              bg-white/55
            "
          />

          {contact.emailAddress && (
            <a
              href={`mailto:${contact.emailAddress}`}
              aria-label="Email"
              className="
                text-[19px]
                transition-opacity
                hover:opacity-60
              "
            >
              <FiMail />
            </a>
          )}

          {contact.phoneNumber && (
            <a
              href={
                contact.phoneLink ||
                "#"
              }
              aria-label="Phone"
              className="
                text-[19px]
                transition-opacity
                hover:opacity-60
              "
            >
              <FiPhone />
            </a>
          )}
        </div>
      </aside>

      {/* MOBILE CONTACT BUTTONS */}

      <div
        className="
          absolute
          bottom-6
          left-6
          z-30
          flex
          items-center
          gap-3
          text-white
          lg:hidden
        "
      >
        {contact.phoneNumber && (
          <a
            href={
              contact.phoneLink ||
              "#"
            }
            aria-label="Call"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/70
              bg-black/10
              backdrop-blur-sm
            "
          >
            <FiPhone />
          </a>
        )}

        {contact.emailAddress && (
          <a
            href={`mailto:${contact.emailAddress}`}
            aria-label="Email"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/70
              bg-black/10
              backdrop-blur-sm
            "
          >
            <FiMail />
          </a>
        )}
      </div>
    </>
  );
}