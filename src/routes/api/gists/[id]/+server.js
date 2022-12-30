import { redirect } from '@sveltejs/kit';
import prisma from '../../../../lib/utils/prisma';

export const GET = async ({ params }) => {
	const gist = await prisma.gists.findUnique({
		where: {
			id: params.id
		},
		include: {
			author: {
				select: {
					fullname: true,
					id: true,
					image: true,
					username: true
					// isAdmin: true
				}
			}
		}
	});

	return new Response(JSON.stringify({ gist }));
};

export const DELETE = async ({ request, params }) => {
	const gist = await prisma.gists.delete({
		where: {
			id: params.id
		}
	});

	if (!gist) throw redirect(302, `/gists/${params.id}`);

	throw redirect(302, `/gists`);

	// return new Response(JSON.stringify({ gist }));
};
