// import { error } from '@sveltejs/kit';

// export const prerender = 'auto';

// export async function load({ params, fetch }) {
// 	const res = await fetch('/data/gists.json');

// 	if (res.ok) {
// 		const data = await res.json();
// 		const gist = data.find((gist) => gist.id === parseInt(params.slug));

// 		if (!gist) throw error(404, `Gist with the id of ${params.slug} was Not Found`);

// 		return { gist };
// 	}
// }
