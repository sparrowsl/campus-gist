import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	if (!locals.student) return redirect(302, '/login');

	return { student: locals.student };
}
