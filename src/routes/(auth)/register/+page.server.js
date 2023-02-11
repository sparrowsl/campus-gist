import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import { registerValidation } from '$lib/utils/validate.js';
import prisma from '../../../lib/utils/prisma';
import { gravatar } from '../../../lib/utils/gravatar';

export async function load({ cookies }) {
	const session = cookies.get('session');
	if (session) throw redirect(302, '/gists');
}

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const fullname = form.get('fullname');
		const username = form.get('username');
		const email = form.get('email');
		const password = form.get('password');

		// Validate form inputs
		try {
			registerValidation.parse({ fullname, username, email, password });
		} catch (error) {
			const { fieldErrors: errors } = error.flatten();
			return { errors };
		}

		// Check if email already exists in the database
		const emailExists = await prisma.student.findUnique({
			where: {
				email
			}
		});
		if (emailExists) return { errors: { email: 'Email already exists!' } };

		// Check if username already exists in the database
		const usernameExists = await prisma.student.findUnique({
			where: { username }
		});
		if (usernameExists) return { errors: { username: 'Username already exists!' } };

		// Hash user password before sending it to database
		const hashed = await bcrypt.hash(password, 10);

		const student = await prisma.student.create({
			data: {
				uuid: nanoid(),
				fullname,
				username,
				email,
				image: gravatar(email),
				password: hashed
			}
		});

		// Set a new cookie using the user id
		cookies.set('session', student.uuid, {
			path: '/',
			sameSite: 'strict',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 1
		});

		throw redirect(302, '/gists');
	}
};
