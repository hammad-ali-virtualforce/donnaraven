import {
  fetchGraphQL,
} from "@/app/lib/graphql";

import {
  GET_BLOG_POST,
  GET_BLOG_POSTS,
} from "@/app/lib/queries/blog-query";

import type {
  BlogArchiveResponse,
  SingleBlogPostResponse,

} from "@/app/types/blog";

type GetBlogPostsArgs = {
  first?: number;
  after?: string | null;
};


export async function getBlogPosts({
  first = 12,
  after = null,
}: GetBlogPostsArgs = {}) {
  const data =
    await fetchGraphQL<BlogArchiveResponse>(
      GET_BLOG_POSTS,
      {
        first,
        after,
      }
    );

  return data;
}


export async function getBlogPost(
  slug: string
) {
  return fetchGraphQL<SingleBlogPostResponse>(
    GET_BLOG_POST,
    {
      slug,
    }
  );
}