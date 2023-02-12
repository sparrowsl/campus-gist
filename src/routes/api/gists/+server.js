import { json } from '@sveltejs/kit';
import prisma from '../../../lib/utils/prisma';

export const GET = async ({}) => {
	const gists = await prisma.gist.findMany({
		orderBy: {
			datePosted: 'desc'
		},
		include: {
			student: {
				select: {
					fullname: true,
					image: true,
					username: true,
					uuid: true
				}
			}
		}
	});
	return json({ gists });
};

export const POST = async ({ request }) => {
	const { authorId, content } = await request.json();

	const gist = await prisma.gists.create({
		data: {
			content,
			authorId
		}
	});

	return json({ gist });
};
