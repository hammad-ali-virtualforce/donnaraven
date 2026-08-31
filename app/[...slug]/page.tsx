import { notFound } from "next/navigation";

import SectionRenderer from "@/app/components/sections/SectionRenderer";

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

  const data = await getPage(uri);


  const page = data?.page;

  if (!page) {
    notFound();
  }

  const sections =
    page.pageSections?.pageSections ?? [];


  return (
    <main>
      <SectionRenderer
        sections={sections}
        contact={{}}
        socials={[]}
      />
    </main>
  );
}