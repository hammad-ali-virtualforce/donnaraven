export const PAGE_QUERY = `
  query Page($uri: ID!) {
    page(
      id: $uri
      idType: URI
    ) {
      id
      title
      slug
      uri

      pageSections {
        pageSections {
          __typename

          ... on PageSectionsPageSectionsHeroSliderLayout {
            slides {
              mediaType

              image {
                node {
                  id
                  sourceUrl
                  altText
                }
              }

              video {
                node {
                  id
                  mediaItemUrl
                }
              }

              videoPoster {
                node {
                  id
                  sourceUrl
                  altText
                }
              }

              imagePosition
              overlayOpacity
            }
          }

          ... on PageSectionsPageSectionsListingsSectionLayout {
            eyebrow
            heading
            listingType
            numberOfListings
          }
          ... on PageSectionsPageSectionsSplitContentSectionLayout {
            eyebrow
            heading
            description
            backgroundColor
            textColor
            imagePosition

            image {
              node {
                id
                sourceUrl
                altText
              }
            }

            buttons {
              buttonText
              buttonLink
            }
          }

          ... on PageSectionsPageSectionsStatsSectionLayout {
            eyebrow
            heading
            description
            backgroundColor
            opacity

            backgroundImage {
              node {
                id
                sourceUrl
                altText
              }
            }

            buttons {
              buttonText
              buttonLink
            }

            stats {
              value
              suffix
              label
            }
          }
          ... on PageSectionsPageSectionsAreasOfExpertiseLayout {
            eyebrow
            heading

            defaultImage {
              node {
                id
                sourceUrl
                altText
              }
            }

            areas {
              areaName
              description
              link

              image {
                node {
                  id
                  sourceUrl
                  altText
                }
              }
            }
          }
          ... on PageSectionsPageSectionsReviewsSectionLayout {
            eyebrow
            heading
            description
            buttonText
            buttonLink

            backgroundImage {
              node {
                id
                sourceUrl
                altText
              }
            }

            reviews {
              reviewerName
              rating
              review
            }
          }
          ... on PageSectionsPageSectionsStepsSectionLayout {
            eyebrow
            heading
            description
            primaryLink
            primaryLinkText
            secondaryLink
            secondaryLinkText

            steps {
              stepNumber
              title
              description
              link
              icon 
            }
          }
        }
      }
    }
  }
`;