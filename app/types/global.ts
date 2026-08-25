import type { MenuItem } from "@/app/types/menu";

export type MediaItem = {
  id: string;
  sourceUrl: string;
  altText: string | null;
};

export type AcfImage = {
  node: MediaItem;
} | null;

export type Branding = {
  siteName: string | null;
  tagline: string | null;
  siteLogo: AcfImage;
  whiteLogo: AcfImage;
  favicon: AcfImage;
};

export type ContactInformation = {
  phoneNumber: string | null;
  phoneLink: string | null;
  emailAddress: string | null;
  officeAddress: string | null;
  googleMapsUrl: string | null;
  licenseNumber: string | null;
};
export type PreFooterSettings = {
  backgroundImage1: AcfImage;
  backgroundImage2: AcfImage;
  logo: AcfImage;
};
export type SocialLink = {
  platform: string[];
  url: string | null;
};

export type HeaderSettings = {
  transparentHeader: boolean;
  stickyHeader: boolean;
  headerBackgroundColor: string | null;
  headerTextColor: string | null;
  headerLogo: AcfImage;
  hamburgerBackgroundImage: AcfImage;
  hamburgerPortraitImage: AcfImage;
};

export type SupportingLogo = {
  logoImage: AcfImage;
  logoLink: string | null;
};

export type FooterSettings = {
  backgroundColor: string | null;
  textColor: string | null;
  copyright: string | null;
  licenseNumber: string | null;
  mlsDisclaimer: string | null;
  dmcaDisclaimer: string | null;
  companyLogoLink: string | null;
  footerLogo: AcfImage;
  companyLogo: AcfImage;
  supportingLogos: SupportingLogo[] | null;
};

export type GlobalSiteData = {
  headerMenu: {
    nodes: MenuItem[];
  };

  hamburgerMenu: {
    nodes: MenuItem[];
  };

  siteSettings: {
    branding: {
      branding: Branding;
    };

    contactInformation: {
      contactInformation: ContactInformation;
    };
    prefooterSettings: PreFooterSettings;
    socialMedia: {
      socialLinks: SocialLink[] | null;
    };

    headerSettings: {
      headerSettings: HeaderSettings;
    };

    footerSettings: {
      footerSettings: FooterSettings;
    };
  };
};