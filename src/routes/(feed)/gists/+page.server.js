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
