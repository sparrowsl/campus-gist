import { redirect } from '@sveltejs/kit';
import { registerValidation } from '$lib/utils/validate.js';

export async function load({ fetch }) {
	const res = await fetch('/data/institutes.json');
	if (!res.ok) return [];

	const data = await res.json();
	return { institutions: data.map((inst) => inst.name) };
}

export const actions = {
	default: async ({ request, fetch }) => {
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

		// Check if user already exists in the database
		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/auth/register/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ fullname, username, email, institution, password })
		});

		const validData = await res.json();
		if (!res.ok) return { error: validData.message };

		return redirect(303, '/gists');
	}
};
