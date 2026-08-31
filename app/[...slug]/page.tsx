import { notFound } from "next/navigation";

import SectionRenderer from "@/app/components/sections/SectionRenderer";

import {
  getGlobalSiteData,
} from "@/app/lib/global";

import {
  getPage,
} from "@/app/lib/page-data";

type DynamicPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function DynamicPage({
  params,
}: DynamicPageProps) {
  const { slug } = await params;

  const uri = `/${slug.join("/")}/`;

  const [
    pageData,
    globalData,
  ] = await Promise.all([
    getPage(uri),
    getGlobalSiteData(),
  ]);

  const page =
    pageData?.page;

  if (!page) {
    notFound();
  }

  const sections =
    page.pageSections
      ?.pageSections ?? [];

  const contact =
    globalData.siteSettings
      .contactInformation
      .contactInformation;

  const socials =
    globalData.siteSettings
      .socialMedia
      .socialLinks ?? [];

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