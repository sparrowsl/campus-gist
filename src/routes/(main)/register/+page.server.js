import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { registerValidation } from '$lib/utils/validate.js';
import prisma from '../../../lib/utils/prisma';
import { gravatar } from '../../../lib/utils/gravatar';

export async function load({ fetch, cookies }) {
	const session = cookies.get('session');
	if (session) throw redirect(302, '/gists');

	const res = await fetch('/data/institutes.json');
	if (!res.ok) return [];

	const data = await res.json();
	return { institutions: data.map((institute) => institute.name) };
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const fullname = data.get('fullname');
		const username = data.get('username');
		const email = data.get('email');
		const institution = data.get('institute');
		const password = data.get('password');
		const confirmPassword = data.get('confirmPassword');

		// Validate form inputs
		const { error } = registerValidation.validate({
			fullname,
			username,
			email,
			institution,
			password,
			confirmPassword
		});
		if (error && error.message.includes('confirmPassword')) {
			return { error: 'Passwords do not match!' };
		}
		if (error) return { error: error.message };

		// Check if user email already exists in the database
		const emailExists = await prisma.students.findUnique({
			where: { email }
		});
		if (emailExists) return { error: 'Email already exists!' };

		const usernameExists = await prisma.students.findUnique({
			where: { username }
		});
		if (usernameExists) return { error: 'Username already exists!' };

		// Hash user password before sending it to database
		const hashed = await bcrypt.hash(password, 10);

		const student = await prisma.students.create({
			data: {
				fullname,
				username,
				email,
				image: gravatar(email),
				institution,
				password: hashed
			}
		});

		// Set a new cookie using the user id
		cookies.set('session', student.id, {
			path: '/',
			sameSite: 'strict',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 1
		});

		return redirect(302, '/gists');
	}
};
