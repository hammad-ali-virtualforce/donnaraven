import Header from "@/app/components/layout/Header/Header";

import {
  getGlobalSiteData,
} from "@/app/lib/global";

type PropertyLayoutProps = {
  children: React.ReactNode;
};

export default async function PropertyLayout({
  children,
}: PropertyLayoutProps) {
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

  return (
    <>
      <Header
        headerMenu={
          globalData.headerMenu.nodes
        }
        hamburgerMenu={
          globalData.hamburgerMenu.nodes
        }
        branding={branding}
        contact={contact}
        socials={socials}
        settings={headerSettings}
        transparent={true}
      />

      {children}
    </>
  );
}