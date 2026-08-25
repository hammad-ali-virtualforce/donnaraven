"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import type {
  Swiper as SwiperType,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroSlide from "./HeroSlide";
import HeroSideRail from "./HeroSideRail";

import type {
  HeroSlide as HeroSlideType,
} from "@/app/types/page-builder";

import type {
  ContactInformation,
  SocialLink,
} from "@/app/types/global";

type HeroSliderProps = {
  slides: HeroSlideType[];
  contact: ContactInformation;
  socials: SocialLink[];
};

export default function HeroSlider({
  slides,
  contact,
  socials,
}: HeroSliderProps) {
  const swiperRef =
    useRef<SwiperType | null>(
      null
    );

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  useEffect(() => {
    const currentSlide =
      slides[activeIndex];

    if (
      currentSlide?.mediaType !==
      "video"
    ) {
      return;
    }

    const timer =
      window.setTimeout(() => {
        const videos =
          document.querySelectorAll(
            ".hero-swiper video"
          );

        videos.forEach(
          (video) => {
            const element =
              video as HTMLVideoElement;

            element
              .play()
              .catch(() => {});
          }
        );
      }, 100);

    return () =>
      window.clearTimeout(timer);
  }, [activeIndex, slides]);

  if (!slides?.length) {
    return null;
  }

  return (
    <section
      className="
        hero-swiper
        relative
        h-screen
        min-h-[650px]
        w-full
        overflow-hidden
        bg-[#082f55]
        supports-[height:100svh]:h-[100svh]
      "
    >
      <Swiper
        modules={[
          Autoplay,
          EffectFade,
          Pagination,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={
          slides.length > 1
        }
        speed={1100}
        autoplay={
          slides.length > 1
            ? {
                delay: 5500,
                disableOnInteraction:
                  false,
              }
            : false
        }
        onSwiper={(swiper) => {
          swiperRef.current =
            swiper;
        }}
        onSlideChange={(
          swiper
        ) => {
          setActiveIndex(
            swiper.realIndex
          );
        }}
        className="h-full w-full"
      >
        {slides.map(
          (slide, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full"
            >
              <HeroSlide
                slide={slide}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* LEFT CONTACT/SOCIAL RAIL */}

      <HeroSideRail
        contact={contact}
        socials={socials}
      />

      {/* SLIDE NUMBER */}

      {slides.length > 1 && (
        <div
          className="
            absolute
            bottom-8
            right-8
            z-30
            hidden
            items-center
            gap-4
            font-mulish
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white
            md:flex
          "
        >
          <span>
            {String(
              activeIndex + 1
            ).padStart(2, "0")}
          </span>

          <span
            className="
              block
              h-px
              w-16
              bg-white/60
            "
          />

          <span>
            {String(
              slides.length
            ).padStart(2, "0")}
          </span>
        </div>
      )}

      {/* EDGE DARKENING FOR LEFT RAIL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          w-[110px]
          bg-gradient-to-r
          from-[#041f3a]/45
          to-transparent
        "
      />
    </section>
  );
}