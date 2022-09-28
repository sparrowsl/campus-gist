import { error } from '@sveltejs/kit';
// import myJson from '/data/students.json' assert { type: 'json' };

export const prerender = 'auto';

export async function load({ params, fetch }) {
	const res = await fetch('/data/students.json');
	const data = await res.json();

	if (params.slug > 0 && params.slug < 5) {
		console.log(data);
		return {
			id: params.slug,
			data,
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	throw error(404, `Gist with an id of ${params.slug} was Not Found`);
}
