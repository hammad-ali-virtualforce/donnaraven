import type {
  ReviewItem,
  ReviewsSectionData,
} from "@/app/types/page-builder";

import { fetchGraphQL } from "@/app/lib/graphql";
import { ALL_REVIEWS_QUERY } from "@/app/lib/queries/reviews-query";

import ReviewsSlider from "./ReviewsSlider";
import ReviewsGrid from "./ReviewsGrid";

type ReviewsSectionProps = {
  section: ReviewsSectionData;
};

type ReviewsResponse = {
  reviews: {
    nodes: ReviewItem[];
  } | null;
};

export default async function ReviewsSection({
  section,
}: ReviewsSectionProps) {
  /*
  |--------------------------------------------------------------------------
  | REVIEWS MANUALLY SELECTED IN ACF RELATIONSHIP
  |--------------------------------------------------------------------------
  */
console.log("reviewdata", section)
  const selectedReviews =
    section.reviews?.nodes ?? [];

  /*
  |--------------------------------------------------------------------------
  | FETCH ALL REVIEW CPT POSTS
  |--------------------------------------------------------------------------
  */

  const data =
    await fetchGraphQL<ReviewsResponse>(
      ALL_REVIEWS_QUERY
    );

  const allReviews =
    data?.reviews?.nodes ?? [];

  /*
  |--------------------------------------------------------------------------
  | DISPLAY STYLE
  |--------------------------------------------------------------------------
  */

  const displayStyle =
    section.displayStyle || "slider";

  /*
  |--------------------------------------------------------------------------
  | SLIDER
  |--------------------------------------------------------------------------
  |
  | Selected reviews take priority.
  |
  | If nothing has been selected in ACF,
  | automatically use Featured reviews.
  |
  */

  if (displayStyle[0] === "slider") {
    const featuredReviews =
      allReviews.filter(
        (review) =>
          review.reviews?.featured ===
          true
      );

    const sliderReviews =
      selectedReviews.length > 0
        ? selectedReviews
        : featuredReviews;

    if (!sliderReviews.length) {
      return null;
    }

    return (
      <ReviewsSlider
        section={section}
        reviews={sliderReviews}
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | GRID
  |--------------------------------------------------------------------------
  |
  | Grid always displays ALL reviews.
  | reviewsPerPage controls pagination.
  |
  */

  if (!allReviews.length) {
    return null;
  }

  return (
    <ReviewsGrid
      section={section}
      reviews={allReviews}
    />
  );
}