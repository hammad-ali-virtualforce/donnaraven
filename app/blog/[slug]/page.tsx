import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlogCard from "@/app/components/blog/BlogCard";

import {
  getBlogPost,
  getBlogPosts,
} from "@/app/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
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

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const [
    postData,
    relatedData,
  ] = await Promise.all([
    getBlogPost(slug),

    getBlogPosts({
      first: 6,
    }),
  ]);

  const post =
    postData?.post;

  if (!post) {
    notFound();
  }

  const image =
    post.featuredImage?.node;

  const category =
    post.categories?.nodes?.[0];

  const relatedPosts =
    (
      relatedData?.posts?.nodes ??
      []
    )
      .filter(
        (relatedPost) =>
          relatedPost.id !==
          post.id
      )
      .slice(0, 3);

  return (
    <main
      className="
        bg-white
        text-[#0b2f53]
      "
    >
      {/* ==================================
          ARTICLE HERO
      ================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#a1160d]
          px-6
          pb-20
          pt-40
          text-white
          md:px-10
          md:pb-24
          md:pt-48
          lg:px-16
          lg:pb-28
          lg:pt-52
        "
      >
        {/* BACKGROUND DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[10%]
            -top-[20%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#ff1c0d]/10
            blur-[120px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1300px]
          "
        >
          {/* META */}

          <div
            className="
              mb-7
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-3
            "
          >
            {category && (
              <Link
                href="/blog/"
                className="
                  font-mulish
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.26em]
                  text-[#ff1c0d]
                "
              >
                {category.name}
              </Link>
            )}

            {category && (
              <span
                className="
                  h-[3px]
                  w-[3px]
                  rounded-full
                  bg-white
                "
              />
            )}

            <span
              className="
                font-mulish
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              {formatDate(
                post.date
              )}
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
              max-w-[1200px]
              font-tenor
              text-[40px]
              uppercase
              leading-[0.9]
              tracking-[-0.045em]
            "
          >
            {post.title}
          </h1>

          {/* AUTHOR */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-px
                w-10
                bg-[#ff1c0d]
              "
            />

            <p
              className="
                font-mulish
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              By{" "}
              {post.author
                ?.node?.name ||
                "Donna Raven"}
            </p>
          </div>
        </div>
      </section>

      {/* ==================================
          FEATURED IMAGE
      ================================== */}

      {image?.sourceUrl && (
        <section
          className="
            bg-white
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1500px]
              px-6
              pt-10
              md:px-10
              md:pt-14
              lg:px-16
              lg:pt-16
            "
          >
            <div
              className="
                relative
                aspect-[16/8]
                min-h-[350px]
                overflow-hidden
                md:min-h-[500px]
                lg:min-h-[650px]
              "
            >
              <Image
                src={
                  image.sourceUrl
                }
                alt={
                  image.altText ||
                  post.title
                }
                fill
                priority
                sizes="100vw"
                className="
                  object-contain
                "
              />
            </div>
          </div>
        </section>
      )}

      {/* ==================================
          ARTICLE BODY
      ================================== */}

      <section
        className="
          py-16
          md:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1300px]
            grid-cols-1
            gap-14
            px-6
            md:px-10
            lg:grid-cols-[180px_minmax(0,760px)]
            lg:justify-center
            lg:gap-16
            lg:px-16
          "
        >
          {/* LEFT SIDEBAR */}

          <aside
            className="
              hidden
              lg:block
            "
          >
            <div
              className="
                sticky
                top-32
              "
            >
              <p
                className="
                  mb-5
                  font-mulish
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#0b2f53]/45
                "
              >
                Article
              </p>

              <div
                className="
                  h-px
                  w-full
                  bg-[#0b2f53]/15
                "
              />

              <div
                className="
                  py-5
                "
              >
                <p
                  className="
                    font-mulish
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#ff1c0d]
                  "
                >
                  {category?.name ||
                    "Real Estate"}
                </p>

                <p
                  className="
                    mt-3
                    font-mulish
                    text-[12px]
                    leading-6
                    text-[#0b2f53]/55
                  "
                >
                  {formatDate(
                    post.date
                  )}
                </p>
              </div>

              <div
                className="
                  h-px
                  w-full
                  bg-[#0b2f53]/15
                "
              />

              <Link
                href="/blog/"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  font-mulish
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0b2f53]
                  transition-colors
                  hover:text-[#ff1c0d]
                "
              >
                <span>
                  ←
                </span>

                All Articles
              </Link>
            </div>
          </aside>

          {/* ARTICLE */}

          <article>
            {post.content ? (
              <div
                className="
                  blog-content
                  font-mulish
                  text-[16px]
                  leading-[1.9]
                  text-[#0b2f53]/75

                  [&_p]:mb-7

                  [&_h2]:mb-6
                  [&_h2]:mt-14
                  [&_h2]:font-tenor
                  [&_h2]:text-[38px]
                  [&_h2]:uppercase
                  [&_h2]:leading-[1.05]
                  [&_h2]:tracking-[-0.025em]
                  [&_h2]:text-[#0b2f53]
                  md:[&_h2]:text-[46px]

                  [&_h3]:mb-5
                  [&_h3]:mt-12
                  [&_h3]:font-tenor
                  [&_h3]:text-[28px]
                  [&_h3]:uppercase
                  [&_h3]:leading-tight
                  [&_h3]:text-[#0b2f53]
                  md:[&_h3]:text-[34px]

                  [&_h4]:mb-4
                  [&_h4]:mt-10
                  [&_h4]:font-tenor
                  [&_h4]:text-[24px]
                  [&_h4]:uppercase
                  [&_h4]:text-[#0b2f53]

                  [&_strong]:font-bold
                  [&_strong]:text-[#0b2f53]

                  [&_a]:font-semibold
                  [&_a]:text-[#ff1c0d]
                  [&_a]:underline
                  [&_a]:underline-offset-4

                  [&_ul]:mb-8
                  [&_ul]:ml-5
                  [&_ul]:list-disc
                  [&_ul]:space-y-3

                  [&_ol]:mb-8
                  [&_ol]:ml-5
                  [&_ol]:list-decimal
                  [&_ol]:space-y-3

                  [&_li::marker]:text-[#ff1c0d]

                  [&_blockquote]:my-12
                  [&_blockquote]:border-l-[3px]
                  [&_blockquote]:border-[#ff1c0d]
                  [&_blockquote]:py-2
                  [&_blockquote]:pl-7
                  [&_blockquote]:font-tenor
                  [&_blockquote]:text-[27px]
                  [&_blockquote]:leading-[1.45]
                  [&_blockquote]:text-[#0b2f53]
                  md:[&_blockquote]:text-[32px]

                  [&_img]:my-10
                  [&_img]:h-auto
                  [&_img]:w-full

                  [&_figure]:my-10

                  [&_figcaption]:mt-3
                  [&_figcaption]:text-[12px]
                  [&_figcaption]:italic
                  [&_figcaption]:text-[#0b2f53]/45

                  [&_hr]:my-12
                  [&_hr]:border-[#0b2f53]/10
                "
                dangerouslySetInnerHTML={{
                  __html:
                    post.content,
                }}
              />
            ) : (
              <p
                className="
                  font-mulish
                  text-[15px]
                  text-[#0b2f53]/60
                "
              >
                This article
                currently has no
                content.
              </p>
            )}

            {/* ARTICLE FOOTER */}

            
          </article>
        </div>
      </section>

      {/* ==================================
          AUTHOR CTA
      ================================== */}

      <section
        className="
          bg-[#f4f2ed]
          py-16
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1200px]
            grid-cols-1
            gap-10
            px-6
            md:px-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
            lg:px-16
          "
        >
          <div>
            <p
              className="
                mb-4
                font-mulish
                text-[10px]
                font-bold
                uppercase
                tracking-[0.26em]
                text-[#ff1c0d]
              "
            >
              Have Real Estate
              Questions?
            </p>

            <h2
              className="
                max-w-[750px]
                font-tenor
                text-[clamp(2.5rem,4vw,4.5rem)]
                uppercase
                leading-[1]
                tracking-[-0.03em]
              "
            >
              Let's Talk About
              Your Next Move
            </h2>

            <p
              className="
                mt-5
                max-w-[650px]
                font-mulish
                text-[14px]
                leading-7
                text-[#0b2f53]/65
              "
            >
              Whether you're
              thinking about buying,
              selling, or simply
              exploring your options,
              Donna is here to help.
            </p>
          </div>

          <Link
            href="/contact/"
            className="
              inline-flex
              min-h-14
              items-center
              justify-center
              self-start
              bg-gradient-to-br
              from-[#ff1c0d]
              to-[#c9150a]
              px-9
              font-mulish
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              transition-transform
              duration-300
              hover:-translate-y-0.5
              lg:self-auto
            "
          >
            Contact Donna
          </Link>
        </div>
      </section>

      {/* ==================================
          RELATED ARTICLES
      ================================== */}

      {relatedPosts.length >
        0 && (
        <section
          className="
            bg-white
            py-20
            md:py-24
            lg:py-28
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1500px]
              px-6
              md:px-10
              lg:px-16
            "
          >
            <div
              className="
                mb-12
                border-b
                border-[#0b2f53]/15
                pb-8
              "
            >
              <p
                className="
                  mb-3
                  font-mulish
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#ff1c0d]
                "
              >
                Keep Reading
              </p>

              <h2
                className="
                  font-tenor
                  text-[clamp(2.5rem,4vw,4.5rem)]
                  uppercase
                  leading-none
                  tracking-[-0.03em]
                "
              >
                Related Articles
              </h2>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-x-6
                gap-y-14
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {relatedPosts.map(
                (
                  relatedPost
                ) => (
                  <BlogCard
                    key={
                      relatedPost.id
                    }
                    post={
                      relatedPost
                    }
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}