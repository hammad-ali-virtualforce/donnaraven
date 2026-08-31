export const GET_BLOG_POSTS = `
  query GetBlogPosts(
    $first: Int = 12
    $after: String
  ) {
    posts(
      first: $first
      after: $after
      where: {
        status: PUBLISH
        orderby: {
          field: DATE
          order: DESC
        }
      }
    ) {
      nodes {
        id
        databaseId

        title
        slug
        uri
        date

        excerpt

        featuredImage {
          node {
            sourceUrl
            altText
          }
        }

        categories {
          nodes {
            id
            name
            slug
          }
        }
      }

      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
export const GET_BLOG_POST = `
  query GetBlogPost($slug: ID!) {
    post(
      id: $slug
      idType: SLUG
    ) {
      id
      databaseId

      title
      slug
      uri
      date

      excerpt
      content

      featuredImage {
        node {
          sourceUrl
          altText
        }
      }

      categories {
        nodes {
          id
          name
          slug
        }
      }

      author {
        node {
          name
        }
      }
    }
  }
`;