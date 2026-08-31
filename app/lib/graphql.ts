const WORDPRESS_URL =
  process.env.WORDPRESS_URL?.replace(/\/+$/, "");

if (!WORDPRESS_URL) {
  throw new Error(
    "WORDPRESS_URL is missing from environment variables"
  );
}

const GRAPHQL_URL =
  `${WORDPRESS_URL}/graphql/`;

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<
    string,
    unknown
  >
): Promise<T> {
  const response = await fetch(
    GRAPHQL_URL,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Accept:
          "application/json",
      },

      body: JSON.stringify({
        query,
        variables,
      }),

      next: {
        revalidate: 60,
      },
    }
  );

  const contentType =
    response.headers.get(
      "content-type"
    );

  if (!response.ok) {
    const errorText =
      await response.text();

    console.error(
      "GraphQL HTTP Error:",
      {
        status:
          response.status,

        statusText:
          response.statusText,

        requestedUrl:
          GRAPHQL_URL,

        finalUrl:
          response.url,

        redirected:
          response.redirected,

        contentType,

        response:
          errorText.slice(
            0,
            700
          ),
      }
    );

    throw new Error(
      `GraphQL request failed with status ${response.status}`
    );
  }

  if (
    !contentType?.includes(
      "application/json"
    )
  ) {
    const responseText =
      await response.text();

    console.error(
      "GraphQL returned non-JSON:",
      {
        requestedUrl:
          GRAPHQL_URL,

        finalUrl:
          response.url,

        redirected:
          response.redirected,

        contentType,

        response:
          responseText.slice(
            0,
            700
          ),
      }
    );

    throw new Error(
      "GraphQL endpoint returned HTML instead of JSON"
    );
  }

  const json =
    await response.json();

  if (json.errors) {
    console.error(
      "GraphQL Errors:",
      json.errors
    );

    throw new Error(
      json.errors
        .map(
          (error: {
            message: string;
          }) =>
            error.message
        )
        .join("\n")
    );
  }

  return json.data;
}