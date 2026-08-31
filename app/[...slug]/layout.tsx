import Header from "@/app/components/layout/Header/Header";
import PreFooterWrapper from "@/app/components/layout/Prefooter/PreFooterWrapper";

import {
  getGlobalSiteData,
} from "@/app/lib/global";

import {
  getPage,
} from "@/app/lib/page-data";

type DynamicLayoutProps = {
  children: React.ReactNode;

  params: Promise<{
    slug: string[];
  }>;
};

export default async function DynamicLayout({
  children,
  params,
}: DynamicLayoutProps) {
  const { slug } = await params;

  const uri =
    `/${slug.join("/")}/`;

  const [
    globalData,
    pageData,
  ] = await Promise.all([
    getGlobalSiteData(),
    getPage(uri),
  ]);

  const page =
    pageData?.page;

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
const preFooterSettings =
  globalData.siteSettings.prefooterSettings;
  const headerSettings =
    globalData.siteSettings
      .headerSettings
      .headerSettings;

  const transparentHeader =
    page?.pageSettings
      ?.transparentHeader ?? true;
  const showPrefooter =
    page?.pageSettings
      ?.showPrefooter ?? true;

  console.log(
    "PAGE:",
    page?.title
  );

  console.log(
    "PAGE TRANSPARENT:",
    showPrefooter
  );

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
        transparent={
          transparentHeader
        }
      />

      {children}
      {showPrefooter ? (
      <PreFooterWrapper
        settings={preFooterSettings}
        />
      ) : ("")}
      
    </>
  );
}