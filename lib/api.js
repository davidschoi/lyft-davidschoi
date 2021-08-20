const VALUE_GRAPHQL_FIELDS = `
	sys {
		id
	}
	image {
		url
	}
	title
	description
`;

async function fetchGraphQL(query, preview = false) {
	return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({ query }),
	}).then((response) => response.json());
}
function extractValueEntries(fetchResponse) {
	return fetchResponse?.data?.valueCollection?.items;
}

export async function getAllValues(preview) {
	const entries = await fetchGraphQL(
		`query {
      valueCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${VALUE_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	);
	return extractValueEntries(entries);
}
