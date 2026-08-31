export const ALL_REVIEWS_QUERY = `
  query GetAllReviews {
    reviews(first: 100) {
      nodes {
        id
        title

        reviews {
          review
          rating
          featured
        }
      }
    }
  }
`;