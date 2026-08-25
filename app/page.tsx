import SectionRenderer from "@/app/components/sections/SectionRenderer";

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

  return (
    <main>
      <SectionRenderer
        sections={sections}
        contact={contact}
        socials={socials}
      />
    </main>
  );
}