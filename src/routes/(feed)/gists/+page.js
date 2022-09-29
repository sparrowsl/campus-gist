import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const res = await fetch('/data/gists.json');

	if (res.ok) {
		const data = await res.json();
		return { gists: data.reverse() };
	}

	throw error(404, `No Gists Was Found`);
};
