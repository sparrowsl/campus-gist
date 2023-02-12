import { redirect } from '@sveltejs/kit';
import { loginValidation } from '$lib/utils/validate.js';
import prisma from '../../../lib/utils/prisma.js';

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
	const session = cookies.get('session');
	if (session) throw redirect(302, '/gists');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		// Validate form inputs
		try {
			loginValidation.parse({ email, password });
		} catch (error) {
			return { error: 'Invalid username and password!' };
		}

		// Check if user already exists in the database
		const student = await prisma.student.findUnique({
			where: { email }
		});
		if (!student) return { error: 'Invalid username and password!' };

		// Set a new cookie using the user id
		cookies.set('session', student.uuid, {
			path: '/',
			sameSite: 'strict',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 1
		});

		// Redirect to gists page if everything succeeds
		throw redirect(303, '/gists');
	}
};
