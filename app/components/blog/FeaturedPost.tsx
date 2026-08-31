import Image from "next/image";
import Link from "next/link";

import type {
  BlogPost,
} from "@/app/types/blog";

type FeaturedPostProps = {
  post: BlogPost;
};

function formatDate(
  date: string
) {
  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  ).format(new Date(date));
}

export default function FeaturedPost({
  post,
}: FeaturedPostProps) {
  const image =
    post.featuredImage?.node;

  const category =
    post.categories?.nodes?.[0];

  return (
    <article
      className="
        grid
        overflow-hidden
        bg-[#f4f2ed]
        lg:grid-cols-[1.35fr_1fr]
      "
    >
      {/* IMAGE */}

      <Link
        href={`/blog/${post.slug}`}
        className="
          group
          relative
          min-h-[430px]
          overflow-hidden
          lg:min-h-[650px]
        "
      >
        {image?.sourceUrl ? (
          <Image
            src={image.sourceUrl}
            alt={
              image.altText ||
              post.title
            }
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.03]
            "
          />
        ) : (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-gradient-to-br

              from-[#ff1c0d]

              to-[#c9150a]
            "
          >
            <span
              className="
                font-tenor
                text-[48px]
                uppercase
                text-white
              "
            >
              Donna Raven
            </span>
          </div>
        )}
      </Link>

      {/* CONTENT */}

      <div
        className="
          flex
          items-center
          px-7
          py-14
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            max-w-[520px]
          "
        >
          <div
            className="
              mb-6
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
            "
          >
            <span
              className="
                font-mulish
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#ff1c0d]
              "
            >
              Latest Article
            </span>

            {category && (
              <>
                <span
                  className="
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-[#0b2f53]/30
                  "
                />

                <span
                  className="
                    font-mulish
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#0b2f53]/50
                  "
                >
                  {category.name}
                </span>
              </>
            )}
          </div>

          <h2
            className="
              font-tenor
              text-[clamp(2.6rem,4vw,4.8rem)]
              uppercase
              leading-[0.98]
              tracking-[-0.035em]
              text-[#0b2f53]
            "
          >
            <Link
              href={`/blog/${post.slug}`}
              className="
                transition-colors
                duration-300
                hover:text-[#ff1c0d]
              "
            >
              {post.title}
            </Link>
          </h2>

          <p
            className="
              mt-6
              font-mulish
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0b2f53]/45
            "
          >
            {formatDate(post.date)}
          </p>

          {post.excerpt && (
            <div
              className="
                mt-7
                line-clamp-4
                font-mulish
                text-[15px]
                leading-8
                text-[#0b2f53]/65
              "
              dangerouslySetInnerHTML={{
                __html:
                  post.excerpt,
              }}
            />
          )}

          <Link
            href={`/blog/${post.slug}`}
            className="
              mt-9
              inline-flex
              min-h-13
              items-center
              justify-center
              bg-gradient-to-br
              from-[#ff1c0d]
              to-[#c9150a]
              px-8
              font-mulish
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              transition-transform
              duration-300
              hover:-translate-y-0.5
            "
          >
            Read Full Article
          </Link>
        </div>
      </div>
    </article>
  );
}