import prisma from '../../../lib/utils/prisma.js';

export const GET = async ({ request }) => {
	const gists = await prisma.gists.findMany({
		orderBy: {
			datePosted: 'desc'
		},
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

	return new Response(JSON.stringify({ gists }));
};
