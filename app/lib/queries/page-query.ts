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
      pageSettings {
        transparentHeader
        showPrefooter
      }
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
            contentBackgroundColor

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
              enableCounter
            }
          }
          ... on PageSectionsPageSectionsAreasOfExpertiseLayout {
            eyebrow
            heading
            buttonText
            buttonLink
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
            __typename
            eyebrow
            heading
            description
            displayStyle
            reviewsPerPage
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
              nodes {
                ... on Review {
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
          ... on PageSectionsPageSectionsInnerHeroLayout {
            eyebrow
            heading
            description
            textColor
            overlayOpacity

            backgroundImage {
              node {
                id
                sourceUrl
                altText
              }
            }

            portraitImage {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
          ... on PageSectionsPageSectionsAssociatesSectionLayout {
            __typename
            eyebrow
            heading
            description
            buttons {
              buttonText
              buttonLink
            }
            associates {
              name
              description
              roleService
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
          ... on PageSectionsPageSectionsContactSectionLayout {
            __typename
            eyebrow
            heading
            description
            showMap
            mapEmbedUrl

            image {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
          ... on PageSectionsPageSectionsFaqSectionLayout {
            __typename
            eyebrow
            heading
            description

            faqGroups {
              groupTitle
              groupDescription

              faqs {
                question
                answer
              }
            }
          }
          ... on PageSectionsPageSectionsPropertyListingsLayout {
            __typename

            eyebrow
            heading
            description
            propertyType
            columns
            propertiesPerPage
          }
        }
      }
    }
  }
`;