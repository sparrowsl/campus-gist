import { writable } from 'svelte/store';

export const gists = writable([]);

export async function getGists() {
	const res = await fetch('/data/gists.json');

	if (res.ok) return await res.json();
}
