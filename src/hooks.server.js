import prisma from './lib/utils/prisma';

export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	// If no session exists, return the normal page
	if (!session) return await resolve(event);

	// Find the user with the unique id
	const student = await prisma.student.findUnique({
		where: {
			uuid: session
		},
		select: {
			id: true,
			uuid: true,
			fullname: true,
			username: true,
			image: true,
			email: true,
			isAdmin: true
		}
	});

	if (student) event.locals.student = student;

	return await resolve(event);
};
