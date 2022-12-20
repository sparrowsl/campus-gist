/** @type {import('./$types').PageLoad} */
export async function load({ fetch, parent }) {
	await parent();

	const res = await fetch('/api/gists');
	const { gists } = await res.json();

	return { gists };
}

/** @type {import('./$types').Actions} */
export const actions = {
	createGist: async ({ request, locals, fetch }) => {
		const form = await request.formData();
		const authorId = locals.student.id;
		const content = form.get('message');

		const res = await fetch('/api/gists', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ authorId, content })
		});
		const data = await res.json();

		console.log(data);
	}
};
