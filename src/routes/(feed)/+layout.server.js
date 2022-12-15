/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	console.log('In feed layout', locals);
	return { student: locals.student || {} };
}
