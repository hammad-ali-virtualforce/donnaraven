import BlogCard from "@/app/components/blog/BlogCard";
import FeaturedPost from "@/app/components/blog/FeaturedPost";

import {
  getBlogPosts,
} from "@/app/lib/blog";

export default async function BlogPage() {
  const data =
    await getBlogPosts({
      first: 13,
    });

  const posts =
    data?.posts?.nodes ?? [];

  const featuredPost =
    posts[0] ?? null;

  const remainingPosts =
    posts.slice(1);

  return (
    <main
      className="
        bg-white
        text-[#0b2f53]
      "
    >
      {/* ==================================
          BLOG HERO
      ================================== */}

      <section
        className="
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
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
          "
        >
          <div
            className="
              max-w-[900px]
            "
          >
            <p
              className="
                mb-5
                font-mulish
                text-[15px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#ff1c0d]
              "
            >
              Insights & Advice
            </p>

            <h1
              className="
                font-tenor
                text-[clamp(3.5rem,8vw,8rem)]
                uppercase
                leading-[0.88]
                tracking-[-0.045em]
              "
            >
              Real Estate
              <br />
              Journal
            </h1>

            <p
              className="
                mt-7
                max-w-[650px]
                font-mulish
                text-[15px]
                leading-8
                text-white
                md:text-[16px]
              "
            >
              Local market insights,
              home buying and selling
              guidance, and useful
              real estate advice from
              Donna Raven.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================
          FEATURED POST
      ================================== */}

      {featuredPost && (
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
              w-full
              max-w-[1500px]
              px-6
              md:px-10
              lg:px-16
            "
          >
            <FeaturedPost
              post={
                featuredPost
              }
            />
          </div>
        </section>
      )}

      {/* ==================================
          LATEST ARTICLES
      ================================== */}

      {remainingPosts.length >
        0 && (
        <section
          className="
            pb-24
            pt-8
            md:pb-28
            lg:pb-32
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
            {/* SECTION HEADING */}

            <div
              className="
                mb-12
                flex
                flex-col
                gap-5
                border-b
                border-[#0b2f53]/15
                pb-8
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <div>
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
                  From The Blog
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
                  Latest Articles
                </h2>
              </div>

              <p
                className="
                  max-w-[450px]
                  font-mulish
                  text-[14px]
                  leading-7
                  text-[#0b2f53]/60
                "
              >
                Explore the latest
                market insights,
                homeowner guidance,
                and real estate
                resources.
              </p>
            </div>

            {/* GRID */}

            <div
              className="
                grid
                grid-cols-1
                gap-x-6
                gap-y-14
                md:grid-cols-2
                lg:grid-cols-3
                lg:gap-y-16
              "
            >
              {remainingPosts.map(
                (post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ==================================
          EMPTY STATE
      ================================== */}

      {posts.length === 0 && (
        <section
          className="
            py-32
            text-center
          "
        >
          <div
            className="
              mx-auto
              max-w-[700px]
              px-6
            "
          >
            <h2
              className="
                font-tenor
                text-[42px]
                uppercase
              "
            >
              No Articles Yet
            </h2>

            <p
              className="
                mt-5
                font-mulish
                text-[15px]
                text-[#0b2f53]/60
              "
            >
              New real estate
              insights will be
              published soon.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}