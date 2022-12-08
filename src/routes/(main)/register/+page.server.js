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

		// Check if user already exists in the database
		const res = await fetch(`${import.meta.env.VITE_API_BASE_ROUTE}/auth/register/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ fullname, username, email, institution, password })
		});
		const validData = await res.json();
		console.log(validData);

		// console.log({ fullname, username, email, institute, password });
	}
};
