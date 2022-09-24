import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export function load({ params }) {
	if (params.slug > 0 && params.slug < 5) {
		console.log(params.slug);
		return {
			id: params.slug,
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	throw error(404, `Gist with an id of ${params.slug} was Not Found`);
}
