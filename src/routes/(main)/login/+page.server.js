import { redirect } from '@sveltejs/kit';
import { loginValidation } from '$lib/utils/validate.js';
import prisma from '../../../lib/utils/prisma.js';

export async function load({ cookies }) {
	const session = cookies.get('session');
	if (session) throw redirect(302, '/gists');
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// Validate form inputs
		const { error } = loginValidation.validate({ email, password });
		if (error) return { error: error.message };

		// Check if user already exists in the database
		const student = await prisma.students.findUnique({
			where: { email }
		});
		console.log(student);

		// Return error from the server
		if (!student) return { error: 'Invalid username and password!' };

		// Set a new cookie using the user id
		cookies.set('session', student.id, {
			path: '/',
			sameSite: 'strict',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 1
		});

		// Redirect to gists page if everything succeeds
		throw redirect(303, '/gists');
	}
};
