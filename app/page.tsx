import SectionRenderer from "@/app/components/sections/SectionRenderer";
import Header from "@/app/components/layout/Header/Header";
import PreFooterWrapper from "@/app/components/layout/Prefooter/PreFooterWrapper";

import {
  getPage,
} from "@/app/lib/page-data";

import {
  getGlobalSiteData,
} from "@/app/lib/global";

export default async function HomePage() {
  const [
    pageData,
    globalData,
  ] = await Promise.all([
    getPage("/"),
    getGlobalSiteData(),
  ]);

  if (!pageData.page) {
    return null;
  }
  const page = pageData?.page;

  const branding =
    globalData.siteSettings
      .branding.branding;
const preFooterSettings =
  globalData.siteSettings.prefooterSettings;
  const sections =
    pageData.page
      .pageSections
      ?.pageSections || [];

  const contact =
    globalData.siteSettings
      .contactInformation
      .contactInformation;

  const socials =
    globalData.siteSettings
      .socialMedia
      .socialLinks || [];

  const headerSettings =
    globalData.siteSettings
      .headerSettings
      .headerSettings;

  const transparentHeader =
    page?.pageSettings
      ?.transparentHeader ?? true;
  return (
    <main>
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
                settings={
                  headerSettings
                }
              />
      <SectionRenderer
        sections={sections}
        contact={contact}
        socials={socials}
      />
      <PreFooterWrapper
              settings={preFooterSettings}
              />
    </main>
  );
}