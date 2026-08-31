export type BlogImage = {
  sourceUrl: string;
  altText: string | null;
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};
export type BlogAuthor = {
  node: {
    name: string;
  };
};

export type BlogPost = {
  id: string;
  databaseId: number;

  title: string;
  slug: string;
  uri: string;
  author: string;
  content: string;
  date: string;

  excerpt: string | null;

  featuredImage: {
    node: BlogImage;
  } | null;

  categories: {
    nodes: BlogCategory[];
  };
};

export type BlogArchiveResponse = {
  posts: {
    nodes: BlogPost[];

    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
};
export type SingleBlogPostResponse = {
  post: BlogPost | null;
};