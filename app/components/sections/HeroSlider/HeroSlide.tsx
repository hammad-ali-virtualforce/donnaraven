"use client";

import Image from "next/image";

import type {
  HeroSlide as HeroSlideType,
} from "@/app/types/page";

type HeroSlideProps = {
  slide: HeroSlideType;
};

function getObjectPosition(
  position?: string[] | null
) {
  const value = position?.[0];

  switch (value) {
    case "top":
      return "object-top";

    case "bottom":
      return "object-bottom";

    case "left":
      return "object-left";

    case "right":
      return "object-right";

    default:
      return "object-center";
  }
}

export default function HeroSlide({
  slide,
}: HeroSlideProps) {
  const imagePosition =
    getObjectPosition(
      slide.imagePosition
    );

  const overlayOpacity =
    slide.overlayOpacity ?? 0;

  if (
    slide.mediaType === "video" &&
    slide.video?.node?.mediaItemUrl
  ) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={
            slide.videoPoster?.node
              ?.sourceUrl
          }
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source
            src={
              slide.video.node
                .mediaItemUrl
            }
          />
        </video>

        {overlayOpacity > 0 && (
          <div
            className="absolute inset-0 bg-black"
            style={{
              opacity:
                overlayOpacity / 100,
            }}
          />
        )}
      </div>
    );
  }

  const image =
    slide.image?.node;

  if (!image) {
    return (
      <div className="h-full w-full bg-[#082f55]" />
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={image.sourceUrl}
        alt={image.altText || ""}
        fill
        priority
        sizes="100vw"
        className={`
          object-cover
          ${imagePosition}
        `}
      />

      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black"
          style={{
            opacity:
              overlayOpacity / 100,
          }}
        />
      )}
    </div>
  );
}