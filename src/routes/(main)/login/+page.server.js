import { redirect } from '@sveltejs/kit';

import { loginValidation } from '$lib/utils/validate.js';

export async function load({ fetch }) {
	// TODO
}

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// Validate form inputs
		const { error } = loginValidation.validate({ email, password });
		if (error) return { error: error.message };

		// Check if user already exists in the database
		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/auth/login/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});
		const validData = await res.json();

		// Return error from the server
		if (!res.ok) return { error: validData.message };

		// Redirect to gists page if everything succeeds
		console.log(validData);
		throw redirect(303, '/gists');
	}
};
