import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const gists = writable([]);

async function getGists() {
	const res = await fetch('/data/gists.json');
	if (res.ok) return (await res.json()) || [];
}

// export async function deleteGist(gist) {
// 	console.log(gist);
// 	gists.update(() => gists.filter((g) => g.id !== gist.id));
// }

if (browser) gists.set(await getGists());
