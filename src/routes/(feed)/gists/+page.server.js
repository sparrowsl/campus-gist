import { redirect } from '@sveltejs/kit';
import prisma from '../../../lib/utils/prisma.js';

export const load = async ({ locals }) => {
	if (!locals.student) throw redirect(303, '/login');

	const gists = await prisma.gists.findMany({
		include: {
			author: {
				select: {
					fullname: true,
					image: true,
					username: true
				}
			}
		}
	});

	return { gists };
};

/** @type {import('./$types').Actions} */
export const actions = {
	createGist: async ({ request }) => {
		const data = await request.formData();
		const author = data.get('author');
		const content = data.get('message');

		console.log({ author, content });
	}
};
