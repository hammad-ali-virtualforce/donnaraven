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

  primaryButtonText: string | null;

  primaryButtonLink: string | null;

  secondaryButtonText: string | null;

  secondaryButtonLink: string | null;
};



export type PageResponse = {
  page: {
    id: string;
    title: string;

    pageSettings: {
      transparentHeader: boolean | null;
      showPrefooter: boolean | null;
    } | null;

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
  enableCounter: boolean | null;
};

export type StatsSectionData = {
  __typename:
    "PageSectionsPageSectionsStatsSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;
  contentBackgroundColor: string | null;
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
  buttonText: string | null;
  buttonLink: string | null;
  gridColumns: "3" | "4" | null;
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
  id: string;
  title: string;

  reviews: {
    review: string | null;
    rating: number | null;
    featured: boolean | null;
    clientType: string | null;
    location: string | null;
  } | null;
};

export type ReviewsSectionData = {
  __typename: "PageSectionsPageSectionsReviewsSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  displayStyle: "slider" | "grid" | null;
  reviewsPerPage: number | null;

  buttonText: string | null;
  buttonLink: string | null;

  backgroundImage: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;

  reviews: {
    nodes: ReviewItem[];
  } | null;
};
export type StepIcon =
  | "clipboard-check"
  | "landmark"
  | "house-search"
  | "handshake"
  | "clipboard-search"
  | "key-round";
export type StepItem = {
  stepNumber: string | null;
  title: string | null;
  description: string | null;
  link: string | null;

   icon: StepIcon | null;
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

export type InnerHeroSectionData = {
  __typename: "PageSectionsPageSectionsInnerHeroLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  textColor: string | null;
  overlayOpacity: number | null;

  backgroundImage: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;

  portraitImage: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;
};
export type AssociateItem = {
  name: string | null;
  roleService: string | null;
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
export type AssociatesSectionButton = {
  buttonText: string | null;
  buttonLink: string | null;
};
export type AssociatesSectionData = {
  __typename: "PageSectionsPageSectionsAssociatesSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;
  buttons: AssociatesSectionButton[] | null;
  associates: AssociateItem[] | null;
};
export type ContactSectionData = {
  __typename:
    "PageSectionsPageSectionsContactSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  showMap: boolean | null;
  mapEmbedUrl: string | null;

  image: {
    node: {
      id: string;
      sourceUrl: string;
      altText: string | null;
    };
  } | null;
};

export type FaqItem = {
  question: string | null;
  answer: string | null;
};

export type FaqGroup = {
  groupTitle: string | null;
  groupDescription: string | null;
  faqs: FaqItem[] | null;
};

export type FaqSectionData = {
  __typename:
    "PageSectionsPageSectionsFaqSectionLayout";

  eyebrow: string | null;
  heading: string | null;
  description: string | null;

  faqGroups: FaqGroup[] | null;
};
export type PropertyListingsSectionData = {
  __typename:
    "PageSectionsPageSectionsPropertyListingsLayout";

  eyebrow: string | null;

  heading: string | null;

  description: string | null;
  primaryButtonText: string | null;
  primaryButtonLink: string | null;
  secondaryButtonText: string | null;
  secondaryButtonLink: string | null;
  propertyType:
    | "all"
    | "active"
    | "sold"
    | null;

  columns:
    | "3"
    | "4"
    | null;

  propertiesPerPage:
    | number
    | null;
};
export type ContentSectionData = {
  __typename:
    "PageSectionsPageSectionsContentSectionLayout";
  
  eyebrow: string | null;

  heading: string | null;

  content: string | null;

  contentWidth:
    | "narrow"
    | "medium"
    | "wide"
    | null;
};


export type PageSection =
   | HeroSliderSection
  | ListingsSectionData
  | SplitContentSectionData
  | StatsSectionData
  | ExpertiseSectionData
  | ReviewsSectionData
  | StepsSectionData
  | InnerHeroSectionData
  | AssociatesSectionData
  | ContactSectionData
  | FaqSectionData
  | PropertyListingsSectionData
  | ContentSectionData
  | {
      __typename: string;
      [key: string]: unknown;
    };