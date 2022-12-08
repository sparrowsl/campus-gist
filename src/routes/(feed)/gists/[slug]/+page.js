import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ params, fetch }) {
	const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/gists/${params.slug}`);

	if (!res.ok) throw error(404, `Gist with that Id was Not Found`);

	const data = await res.json();
	return { gist: data };
}
