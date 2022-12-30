import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, parent, params, locals }) {
	await parent();

	const res = await fetch(`/api/gists/${params.id}`);
	const { gist } = await res.json();

	if (!res.ok) throw error(404, `Gist with that Id was Not Found`);

	if (!gist) throw redirect(302, '/gists');

	return { gist };
}
