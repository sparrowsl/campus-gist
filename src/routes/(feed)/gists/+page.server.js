/** @type {import('./$types').PageLoad} */
export async function load({ fetch, parent }) {
	await parent();

	const res = await fetch('/api/gists');
	const { gists } = await res.json();

	return { gists };
}

/** @type {import('./$types').Actions} */
export const actions = {
	createGist: async ({ request, locals }) => {
		const data = await request.formData();
		const author = data.get('author');
		const content = data.get('message');

		console.log({ locals });

		console.log({ author, content });
	}
};
