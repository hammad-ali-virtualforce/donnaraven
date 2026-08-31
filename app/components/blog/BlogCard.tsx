import Image from "next/image";
import Link from "next/link";

import type {
  BlogPost,
} from "@/app/types/blog";

type BlogCardProps = {
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

export default function BlogCard({
  post,
}: BlogCardProps) {
  const image =
    post.featuredImage?.node;

  const category =
    post.categories?.nodes?.[0];

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
      "
    >
      {/* IMAGE */}

      <Link
        href={`/blog/${post.slug}`}
        className="
          relative
          block
          aspect-[4/3]
          overflow-hidden
          bg-[#f3f1ec]
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.035]
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
              bg-[#0b2f53]
            "
          >
            <span
              className="
                font-tenor
                text-[30px]
                uppercase
                tracking-[0.05em]
                text-white/20
              "
            >
              Donna Raven
            </span>
          </div>
        )}

        {/* IMAGE OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-[#0b2f53]/0
            transition-colors
            duration-500
            group-hover:bg-[#0b2f53]/10
          "
        />

        {category && (
          <span
            className="
              absolute
              left-5
              top-5
              bg-[#ff1c0d]
              px-4
              py-2
              font-mulish
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            {category.name}
          </span>
        )}
      </Link>

      {/* CONTENT */}

      <div
        className="
          flex
          flex-1
          flex-col
          pt-6
        "
      >
        <p
          className="
            mb-4
            font-mulish
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#0b2f53]/45
          "
        >
          {formatDate(post.date)}
        </p>

        <h2
          className="
            font-tenor
            text-[28px]
            uppercase
            leading-[1.08]
            tracking-[-0.025em]
            text-[#0b2f53]
            md:text-[20px]
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

        {post.excerpt && (
          <div
            className="
              mt-5
              line-clamp-3
              font-mulish
              text-[14px]
              leading-7
              text-[#0b2f53]/65
            "
            dangerouslySetInnerHTML={{
              __html:
                post.excerpt,
            }}
          />
        )}

        <div
          className="
            mt-auto
            pt-7
          "
        >
          <Link
            href={`/blog/${post.slug}`}
            className="
              inline-flex
              items-center
              gap-3
              font-mulish
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#0b2f53]
              transition-colors
              duration-300
              hover:text-[#ff1c0d]
            "
          >
            Read Article

            <span
              className="
                block
                h-px
                w-8
                bg-[#ff1c0d]
                transition-all
                duration-300
                group-hover:w-12
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
}