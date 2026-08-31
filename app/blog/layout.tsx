import Header from "@/app/components/layout/Header/Header";
import PreFooterWrapper from "@/app/components/layout/Prefooter/PreFooterWrapper";

import {
  getGlobalSiteData,
} from "@/app/lib/global";

type BlogLayoutProps = {
  children: React.ReactNode;
};

export default async function BlogLayout({
  children,
}: BlogLayoutProps) {
  const globalData =
    await getGlobalSiteData();

  const branding =
    globalData.siteSettings
      .branding.branding;

  const contact =
    globalData.siteSettings
      .contactInformation
      .contactInformation;

  const socials =
    globalData.siteSettings
      .socialMedia.socialLinks ?? [];

  const headerSettings =
    globalData.siteSettings
      .headerSettings
      .headerSettings;

  const preFooterSettings =
    globalData.siteSettings
      .prefooterSettings;

  return (
    <>
      <Header
        headerMenu={
          globalData.headerMenu.nodes
        }
        hamburgerMenu={
          globalData
            .hamburgerMenu.nodes
        }
        branding={branding}
        contact={contact}
        socials={socials}
        settings={
          headerSettings
        }
        transparent={true}
      />

      {children}

      <PreFooterWrapper
        settings={
          preFooterSettings
        }
      />
    </>
  );
}