export const GLOBAL_SITE_QUERY = `
  query GlobalSiteData {
    headerMenu: menuItems(
      where: {
        location: HEADER_MENU
      }
      first: 100
    ) {
      nodes {
        id
        parentId
        label
        url
        path
        target
        cssClasses
      }
    }

    hamburgerMenu: menuItems(
      where: {
        location: HAMBURGER_MENU
      }
      first: 100
    ) {
      nodes {
        id
        parentId
        label
        url
        path
        target
        cssClasses
      }
    }

    siteSettings {

      branding {
        branding {
          siteName
          tagline

          siteLogo {
            node {
              id
              sourceUrl
              altText
            }
          }

          whiteLogo {
            node {
              id
              sourceUrl
              altText
            }
          }

          favicon {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
      }

      contactInformation {
        contactInformation {
          phoneNumber
          phoneLink
          emailAddress
          officeAddress
          googleMapsUrl
          licenseNumber
        }
      }

      socialMedia {
        socialLinks {
          platform
          url
        }
      }

      headerSettings {
        headerSettings {
          transparentHeader
          stickyHeader
          headerBackgroundColor
          headerTextColor

          headerLogo {
            node {
              id
              sourceUrl
              altText
            }
          }

          hamburgerBackgroundImage {
            node {
              id
              sourceUrl
              altText
            }
          }

          hamburgerPortraitImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
      }

      prefooterSettings {
        backgroundImage1 {
          node {
            id
            sourceUrl
            altText
          }
        }

        backgroundImage2 {
          node {
            id
            sourceUrl
            altText
          }
        }

        logo {
          node {
            id
            sourceUrl
            altText
          }
        }
      }

      footerSettings {
        footerSettings {
          backgroundColor
          textColor
          copyright
          licenseNumber
          mlsDisclaimer
          dmcaDisclaimer
          companyLogoLink

          footerLogo {
            node {
              id
              sourceUrl
              altText
            }
          }

          companyLogo {
            node {
              id
              sourceUrl
              altText
            }
          }

          supportingLogos {
            logoImage {
              node {
                id
                sourceUrl
                altText
              }
            }

            logoLink
          }
        }
      }

    }
  }
`;