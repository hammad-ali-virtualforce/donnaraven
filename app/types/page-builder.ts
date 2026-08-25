export type AcfImage = {
  node: {
    id: string;
    sourceUrl: string;
    altText: string | null;
  };
} | null;

export type HeroVideo = {
  node: {
    id: string;
    mediaItemUrl: string;
  };
} | null;

export type HeroSlide = {
  mediaType: "image" | "video";

  image: AcfImage;

  video: HeroVideo;

  videoPoster: AcfImage;

  imagePosition: string[] | null;

  overlayOpacity: number | null;
};

export type HeroSliderSection = {
  __typename:
    "PageSectionsPageSectionsHeroSliderLayout";

  slides: HeroSlide[];
};

export type ListingsSectionData = {
  __typename:
    "PageSectionsPageSectionsListingsSectionLayout";

  eyebrow: string | null;

  heading: string | null;

  listingType: string[] | null;

  numberOfListings: number | null;
};



export type PageResponse = {
  page: {
    id: string;
    title: string;

    pageSections: {
      pageSections: PageSection[];
    };
  } | null;
};

export type SectionButton = {
  buttonText: string | null;
  buttonLink: string | null;
};

export type SplitContentSectionData = {
  __typename:
    "PageSectionsPageSectionsSplitContentSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  backgroundColor: string | null;
  textColor: string | null;

  imagePosition: string[] | null;

  image: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;

  buttons: SectionButton[] | null;
};

export type StatItem = {
  value: string | null;
  suffix: string | null;
  label: string | null;
};

export type StatsSectionData = {
  __typename:
    "PageSectionsPageSectionsStatsSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  backgroundColor: string | null;
  opacity: boolean | null;
  backgroundImage: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;

  buttons: SectionButton[] | null;

  stats: StatItem[] | null;
};
export type ExpertiseArea = {
  areaName: string | null;
  description: string | null;
  link: string | null;

  image: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;
};

export type ExpertiseSectionData = {
  __typename:
    "PageSectionsPageSectionsExpertiseSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  
  defaultImage: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;

  areas: ExpertiseArea[] | null;
};
export type ReviewItem = {
  reviewerName: string | null;
  rating: number | null;
  review: string | null;
};

export type ReviewsSectionData = {
  __typename:
    "PageSectionsPageSectionsReviewsSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  buttonText: string | null;
  buttonLink: string | null;

  backgroundImage: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;

  reviews: ReviewItem[] | null;
};

export type StepItem = {
  stepNumber: string | null;
  title: string | null;
  description: string | null;
  link: string | null;

  icon: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;
};

export type StepsSectionData = {
  __typename:
    "PageSectionsPageSectionsStepsSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  primaryLink: string | null;
  primaryLinkText: string | null;

  secondaryLink: string | null;
  secondaryLinkText: string | null;

  steps: StepItem[] | null;
};

export type PageSection =
   | HeroSliderSection
  | ListingsSectionData
  | SplitContentSectionData
  | StatsSectionData
  | ExpertiseSectionData
  | ReviewsSectionData
  | StepsSectionData
  | {
      __typename: string;
      [key: string]: unknown;
    };