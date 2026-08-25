import {
  fetchGraphQL,
} from "@/app/lib/graphql";

import {
  PAGE_QUERY,
} from "@/app/lib/queries/page-query";

import type {
  PageResponse,
} from "@/app/types/page-builder";

export async function getPage(
  uri: string
) {
  return fetchGraphQL<PageResponse>(
    PAGE_QUERY,
    {
      uri,
    }
  );
}