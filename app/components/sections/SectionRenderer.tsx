import HeroSlider from "@/app/components/sections/HeroSlider/HeroSlider";
import ListingsSection from "@/app/components/sections/Listings/ListingsSection";
import SplitContentSection from "@/app/components/sections/SplitContent/SplitContentSection";
import StatsSection from "@/app/components/sections/Stats/StatsSection";
import ExpertiseSection from "@/app/components/sections/Expertise/ExpertiseSection";
import ReviewsSection from "@/app/components/sections/Reviews/ReviewsSection";
import StepsSection from "@/app/components/sections/Steps/StepsSection";

import type {
  StatsSectionData,
} from "@/app/types/page-builder";


import type {
  SplitContentSectionData,
} from "@/app/types/page-builder";

import type {
  ReviewsSectionData,
} from "@/app/types/page-builder";
import type {
  ContactInformation,
  SocialLink,
} from "@/app/types/global";
import type {
  StepsSectionData,
} from "@/app/types/page-builder";
import type {
  PageSection,
  HeroSliderSection,
  ListingsSectionData,
} from "@/app/types/page-builder";
import type {
  ExpertiseSectionData,
} from "@/app/types/page-builder";

type SectionRendererProps = {
  sections: PageSection[];

  contact: ContactInformation;

  socials: SocialLink[];
};

export default function SectionRenderer({
  sections,
  contact,
  socials,
}: SectionRendererProps) {
  return (
    <>
      {sections.map(
        (section, index) => {

          switch (
            section.__typename
          ) {
            case "PageSectionsPageSectionsHeroSliderLayout":
              return (
                <HeroSlider
                  key={`${section.__typename}-${index}`}
                  slides={
                    (
                      section as HeroSliderSection
                    ).slides
                  }
                  contact={contact}
                  socials={socials}
                />
              );

            case "PageSectionsPageSectionsListingsSectionLayout":
              return (
                <ListingsSection
                  key={`${section.__typename}-${index}`}
                  section={
                    section as ListingsSectionData
                  }
                />
              );
            case "PageSectionsPageSectionsSplitContentSectionLayout":
              return (
                <SplitContentSection
                  key={`${section.__typename}-${index}`}
                  section={
                    section as SplitContentSectionData
                  }
                />
              );
            case "PageSectionsPageSectionsStatsSectionLayout":
              return (
                <StatsSection
                  key={`${section.__typename}-${index}`}
                  section={
                    section as StatsSectionData
                  }
                />
              );
            case "PageSectionsPageSectionsAreasOfExpertiseLayout":
              return (
                <ExpertiseSection
                  key={`${section.__typename}-${index}`}
                  section={
                    section as ExpertiseSectionData
                  }
                />
              );
            case "PageSectionsPageSectionsReviewsSectionLayout":
              return (
                <ReviewsSection
                  key={`${section.__typename}-${index}`}
                  section={
                    section as ReviewsSectionData
                  }
                />
              );
            case "PageSectionsPageSectionsStepsSectionLayout":
              return (
                <StepsSection
                  key={`${section.__typename}-${index}`}
                  section={
                    section as StepsSectionData
                  }
                />
              );
            default:
              console.warn(
                `Unknown page section: ${section.__typename}`
              );

              return null;
          }
        }
      )}
    </>
  );
}