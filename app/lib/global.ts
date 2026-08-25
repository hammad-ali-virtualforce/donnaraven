import { fetchGraphQL } from "@/app/lib/graphql";
import { GLOBAL_SITE_QUERY } from "@/app/lib/queries/global";

import type { GlobalSiteData } from "@/app/types/global";

export async function getGlobalSiteData() {
  return fetchGraphQL<GlobalSiteData>(
    GLOBAL_SITE_QUERY
  );
}