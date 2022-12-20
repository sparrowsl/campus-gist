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

export const POST = async ({ request }) => {
	const { authorId, content } = await request.json();

	const gist = await prisma.gists.create({
		data: {
			content,
			authorId
		}
	});

	return new Response(JSON.stringify({ gist }));
};
