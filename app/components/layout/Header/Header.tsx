"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import HeaderMenu from "./HeaderMenu";
import HamburgerButton from "./HamburgerButton";
import HamburgerPanel from "./HamburgerPanel";

import type { MenuItem } from "@/app/types/menu";

import type {
  Branding,
  ContactInformation,
  HeaderSettings,
  SocialLink,
} from "@/app/types/global";

type HeaderProps = {
  headerMenu: MenuItem[];
  hamburgerMenu: MenuItem[];

  branding: Branding;

  contact: ContactInformation;

  socials: SocialLink[];

  settings: HeaderSettings;
};

export default function Header({
  headerMenu,
  hamburgerMenu,
  branding,
  contact,
  socials,
  settings,
}: HeaderProps) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(
        window.scrollY > 50
      );
    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const normalLogo =
    settings.headerLogo?.node ||
    branding.siteLogo?.node;

  const lightLogo =
    branding.whiteLogo?.node ||
    normalLogo;

  const currentLogo =
    !scrolled &&
    settings.transparentHeader
      ? lightLogo
      : normalLogo;

  const backgroundColor =
    scrolled ||
    !settings.transparentHeader
      ? settings.headerBackgroundColor ||
        "#F3F0E9"
      : "transparent";

  const textColor =
    scrolled ||
    !settings.transparentHeader
      ? "#fff"
      : settings.headerTextColor ||
        "#FFFFFF";

  return (
    <>
      <header
        className={`
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            settings.stickyHeader
              ? "fixed"
              : "absolute"
          }
        `}
        style={{
          backgroundColor,
          color: textColor,
        }}
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
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500
              ${
                scrolled
                  ? "h-[82px]"
                  : "h-[105px]"
              }
            `}
          >
            <Link
              href="/"
              className="
                relative
                z-20
                block
              "
            >
              {currentLogo ? (
                <Image
                  src={
                    currentLogo.sourceUrl
                  }
                  alt={
                    currentLogo.altText ||
                    branding.siteName ||
                    "Logo"
                  }
                  width={220}
                  height={90}
                  priority
                  className="
                    h-auto
                    w-[155px]
                    object-contain
                    md:w-[180px]
                    xl:w-[205px]
                    invert
                    brightness-0
                  "
                />
              ) : (
                <span className="text-xl uppercase tracking-[0.16em]">
                  {
                    branding.siteName
                  }
                </span>
              )}
            </Link>

            <div className="flex items-center gap-6 xl:gap-10">
              <HeaderMenu
                items={headerMenu}
              />

              <HamburgerButton
                isOpen={isOpen}
                onClick={() =>
                  setIsOpen(true)
                }
              />
            </div>
          </div>
        </div>
      </header>

      <HamburgerPanel
        items={hamburgerMenu}
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
        branding={branding}
        contact={contact}
        socials={socials}
        settings={settings}
      />
    </>
  );
}