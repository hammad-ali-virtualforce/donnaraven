"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FaXTwitter,
} from "react-icons/fa6";

import type { MenuItem } from "@/app/types/menu";

import type {
  Branding,
  ContactInformation,
  HeaderSettings,
  SocialLink,
} from "@/app/types/global";

gsap.registerPlugin(useGSAP);

type MenuTreeItem = MenuItem & {
  children: MenuTreeItem[];
};

type HamburgerPanelProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;

  branding: Branding;

  contact: ContactInformation;

  socials: SocialLink[];

  settings: HeaderSettings;
};

function buildMenuTree(
  items: MenuItem[]
): MenuTreeItem[] {
  const map =
    new Map<string, MenuTreeItem>();

  const roots: MenuTreeItem[] = [];

  items.forEach((item) => {
    map.set(item.id, {
      ...item,
      children: [],
    });
  });

  items.forEach((item) => {
    const current = map.get(item.id);

    if (!current) return;

    if (item.parentId) {
      const parent = map.get(
        item.parentId
      );

      if (parent) {
        parent.children.push(current);
      } else {
        roots.push(current);
      }
    } else {
      roots.push(current);
    }
  });

  return roots;
}

function getHref(item: MenuItem) {
  if (!item.path || item.path === "#") {
    return "#";
  }

  return item.path;
}

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

export default function HamburgerPanel({
  items,
  isOpen,
  onClose,
  branding,
  contact,
  socials,
  settings,
}: HamburgerPanelProps) {
  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const leftRef =
    useRef<HTMLDivElement>(null);

  const rightRef =
    useRef<HTMLDivElement>(null);

  const timelineRef =
    useRef<gsap.core.Timeline | null>(
      null
    );

  const menuTree = useMemo(
    () => buildMenuTree(items),
    [items]
  );

  const firstWithChildren =
    menuTree.find(
      (item) =>
        item.children.length > 0
    );

  const [
    activeMenuId,
    setActiveMenuId,
  ] = useState<string | null>(null);

  const activeItem =
    menuTree.find(
      (item) =>
        item.id === activeMenuId
    ) || null;

  const backgroundImage =
    settings.hamburgerBackgroundImage
      ?.node;

  const portraitImage =
    settings.hamburgerPortraitImage
      ?.node;

  const logo =
    settings.headerLogo?.node ||
    branding.siteLogo?.node;

  useGSAP(
    () => {
      if (
        !wrapperRef.current ||
        !leftRef.current
      ) {
        return;
      }

      gsap.set(wrapperRef.current, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(leftRef.current, {
        xPercent: -100,
      });

      if (rightRef.current) {
        gsap.set(rightRef.current, {
          xPercent: 100,
        });
      }

      const tl = gsap.timeline({
        paused: true,

        onStart: () => {
          gsap.set(
            wrapperRef.current,
            {
              autoAlpha: 1,
              pointerEvents: "auto",
            }
          );
        },

        onReverseComplete: () => {
          gsap.set(
            wrapperRef.current,
            {
              autoAlpha: 0,
              pointerEvents: "none",
            }
          );
        },
      });

      tl.to(
        leftRef.current,
        {
          xPercent: 0,
          duration: 0.9,
          ease: "power4.inOut",
        },
        0
      );

      if (rightRef.current) {
        tl.to(
          rightRef.current,
          {
            xPercent: 0,
            duration: 0.9,
            ease: "power4.inOut",
          },
          0
        );
      }

      tl.fromTo(
        ".hamburger-primary-item",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.055,
          duration: 0.55,
          ease: "power3.out",
        },
        0.4
      );

      tl.fromTo(
        ".hamburger-bottom",
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0.62
      );

      timelineRef.current = tl;
    },
    {
      scope: wrapperRef,
    }
  );

  useEffect(() => {
    const timeline =
      timelineRef.current;

    if (!timeline) return;

    if (isOpen) {
      timeline.play();

      document.body.style.overflow =
        "hidden";
    } else {
      timeline.reverse();

      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(
      event: KeyboardEvent
    ) {
      if (
        event.key === "Escape" &&
        isOpen
      ) {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [isOpen, onClose]);

  return (
    <div
      ref={wrapperRef}
      className="
        invisible
        fixed
        inset-0
        z-[100]
        flex
        h-dvh
        w-screen
      "
    >
      {/* LEFT SIDE */}

      <div
        ref={leftRef}
        className="
          relative
          flex
          h-full
          w-full
          flex-col
          overflow-hidden
          bg-[#f1f0eb]
          text-[#19354f]
          lg:w-[62%]
        "
      >
        {/* Faded architectural background */}

        {backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={
                backgroundImage.sourceUrl
              }
              alt=""
              fill
              priority
              sizes="62vw"
              className="
                object-cover
                opacity-[0.10]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[#f1f0eb]/80
              "
            />
          </div>
        )}

        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            px-7
            pb-8
            pt-7
            md:px-12
            md:pb-10
            md:pt-10
            xl:px-16
            border-l-[100px]
            border-[#f1150447]
          "
        >
          {/* MOBILE LOGO */}

          <div className="mb-10 flex items-center lg:hidden">
            {logo ? (
              <Image
                src={logo.sourceUrl}
                alt={
                  logo.altText ||
                  branding.siteName ||
                  "Logo"
                }
                width={200}
                height={80}
                className="h-auto w-[150px]"
              />
            ) : (
              <span className="text-lg uppercase tracking-[0.16em]">
                {branding.siteName}
              </span>
            )}
          </div>

          {/* MAIN NAVIGATION */}

          <div
            className="
              flex
              flex-1
              items-center
            "
          >
            <div
              className="
                grid
                w-full
                gap-10
                lg:grid-cols-[minmax(260px,0.9fr)_1fr]
                xl:gap-20
              "
              onMouseLeave={() =>
                setActiveMenuId(null)
              }
            >
              <nav>
                <ul
                  className="
                    space-y-[10px]
                    md:space-y-[12px]
                  "
                >
                  {menuTree.map(
                    (item) => {
                      const isActive =
                        item.id ===
                          activeMenuId &&
                        item.children
                          .length > 0;

                      return (
                        <li
                          key={item.id}
                          className="hamburger-primary-item"
                          onMouseEnter={() => {
                            if (
                              item
                                .children
                                .length >
                              0
                            ) {
                              setActiveMenuId(
                                item.id
                              );
                            }
                            else {
                                setActiveMenuId(null);
                              }
                          }}
                        >
                          <div className="flex items-center">
                            <Link
                              href={getHref(
                                item
                              )}
                              target={
                                item.target ||
                                undefined
                              }
                              onClick={
                                item.path !==
                                "#"
                                  ? onClose
                                  : undefined
                              }
                              className={`
                                whitespace-nowrap
                                font-light
                                uppercase
                                leading-none
                                tracking-[-0.035em]
                                transition-colors
                                duration-300
                                md:text-6xl
                                text-3xl
                                ${
                                  isActive
                                    ? "text-[#0d3150]"
                                    : "text-[#87939a] hover:text-[#0d3150]"
                                }
                              `}
                            >
                              {
                                item.label
                              }
                            </Link>

                            
                          </div>

                          {/* MOBILE SUBMENU */}

                          {item.children
                            .length >
                            0 && (
                            <div className="mt-4 hidden">
                              <button
                                type="button"
                                onClick={() =>
                                  setActiveMenuId(
                                    isActive
                                      ? null
                                      : item.id
                                  )
                                }
                                className="
                                  mb-3
                                  text-[11px]
                                  uppercase
                                  tracking-[0.15em]
                                "
                              >
                                {isActive
                                  ? "Hide"
                                  : "View"}
                              </button>

                              {isActive && (
                                <ul className="space-y-3 border-l border-[#0d3150]/20 pl-5 hidden md:flex">
                                  {item.children.map(
                                    (
                                      child
                                    ) => (
                                      <li
                                        key={
                                          child.id
                                        }
                                      >
                                        <Link
                                          href={getHref(
                                            child
                                          )}
                                          onClick={
                                            onClose
                                          }
                                          className="
                                            text-sm
                                            uppercase
                                            tracking-[0.1em]
                                          "
                                        >
                                          {
                                            child.label
                                          }
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </div>
                          )}
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>

              {/* DESKTOP SUBMENU */}

              <div
                className="
                  hidden
                  items-center
                  lg:flex
                "
              >
                {activeItem &&
                  activeItem
                    .children
                    .length >
                    0 && (
                    <div
                      key={
                        activeItem.id
                      }
                      className="submenu-panel"
                    >
                      <ul
                        className="
                          space-y-5
                        "
                      >
                        {activeItem.children.map(
                          (
                            child
                          ) => (
                            <li
                              key={
                                child.id
                              }
                            >
                              <Link
                                href={getHref(
                                  child
                                )}
                                target={
                                  child.target ||
                                  undefined
                                }
                                onClick={
                                  onClose
                                }
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-4
                                  text-[clamp(1rem,1.35vw,1.45rem)]
                                  uppercase
                                  tracking-[0.04em]
                                  text-[#173c58]
                                "
                              >
                                <span
                                  className="
                                    block
                                    h-px
                                    w-0
                                    bg-current
                                    transition-all
                                    duration-300
                                    group-hover:w-8
                                  "
                                />

                                {
                                  child.label
                                }
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* BOTTOM INFO */}

          <div
            className="
              hamburger-bottom
              grid
              gap-7
              border-t
              border-[#153850]/20
              pt-7
              text-[11px]
              uppercase
              tracking-[0.10em]
              md:grid-cols-2
              xl:grid-cols-[1fr_1.3fr_auto]
            "
          >
            <div className="space-y-2">
              {contact.phoneNumber && (
                <a
                  href={
                    contact.phoneLink ||
                    "#"
                  }
                  className="block"
                >
                  {
                    contact.phoneNumber
                  }
                </a>
              )}

              {contact.emailAddress && (
                <a
                  href={`mailto:${contact.emailAddress}`}
                  className="block"
                >
                  {
                    contact.emailAddress
                  }
                </a>
              )}
            </div>

            <div className="space-y-2">
              {contact.officeAddress && (
                contact.googleMapsUrl ? (
                  <a
                    href={
                      contact.googleMapsUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="block max-w-[280px] leading-5"
                  >
                    {
                      contact.officeAddress
                    }
                  </a>
                ) : (
                  <p className="max-w-[280px] leading-5">
                    {
                      contact.officeAddress
                    }
                  </p>
                )
              )}

              {contact.licenseNumber && (
                <p>
                  License #{" "}
                  {
                    contact.licenseNumber
                  }
                </p>
              )}
            </div>

            {socials.length >
              0 && (
              <div className="flex items-center gap-4">
                {socials.map(
                  (
                    social,
                    index
                  ) => {
                    const platform =
                      social
                        .platform?.[0];

                    if (
                      !platform ||
                      !social.url
                    ) {
                      return null;
                    }

                    return (
                      <a
                        key={`${platform}-${index}`}
                        href={
                          social.url
                        }
                        target="_blank"
                        rel="noreferrer"
                        aria-label={
                          platform
                        }
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#153850]/30
                          text-sm
                          transition-all
                          duration-300
                          hover:bg-[#153850]
                          hover:text-white
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
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT PORTRAIT */}

      {portraitImage && (
        <div
          ref={rightRef}
          className="
            relative
            hidden
            h-full
            w-[38%]
            overflow-hidden
            lg:block
          "
        >
          <Image
            src={
              portraitImage.sourceUrl
            }
            alt={
              portraitImage.altText ||
              branding.siteName ||
              ""
            }
            fill
            priority
            sizes="38vw"
            className="
              object-cover
              object-center
            "
          />
        </div>
      )}

      {/* CLOSE BUTTON */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="
          absolute
          right-7
          top-7
          z-[120]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#173850]
          shadow-sm
          md:right-10
          md:top-10
          cursor-pointer
        "
      >
        <span
          className="
            absolute
            h-px
            w-6
            rotate-45
            bg-current
          "
        />

        <span
          className="
            absolute
            h-px
            w-6
            -rotate-45
            bg-current
          "
        />
      </button>
    </div>
  );
}