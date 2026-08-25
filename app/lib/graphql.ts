const WORDPRESS_URL = process.env.WORDPRESS_URL;

if (!WORDPRESS_URL) {
  throw new Error("WORDPRESS_URL is missing from .env.local");
}

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(`${WORDPRESS_URL}/graphql`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query,
      variables,
    }),

    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
  const errorText = await response.text();

  console.error(
    "GraphQL HTTP Error:",
    response.status,
    errorText
  );

  throw new Error(
    `GraphQL request failed with status ${response.status}: ${errorText}`
  );
}

  const json = await response.json();

  if (json.errors) {
    throw new Error(
      json.errors
        .map((error: { message: string }) => error.message)
        .join("\n")
    );
  }

  return json.data;
}