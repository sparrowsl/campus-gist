import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	if (!locals.student) throw redirect(303, '/login');

	return { student: locals.student };
}
