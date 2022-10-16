import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/gists`);

	if (res.ok) {
		const data = await res.json();
		return { gists: data };
	}
	throw error(404, `No Gist Was Found`);
};
