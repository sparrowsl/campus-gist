import prisma from '../../../lib/utils/prisma.js';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, parent }) {
	await parent();

	const student = await prisma.students.findUnique({
		where: {
			id: locals.student.id
		},
		select: {
			// email: true,
			// fullname: true,
			// image: true,
			// isAdmin: true,
			// username: true,
			bio: true,
			institution: true,
			joined: true
		}
	});

	// console.log({ ...student, ...locals.student });
	return { student: { ...student, ...locals.student } };
}
