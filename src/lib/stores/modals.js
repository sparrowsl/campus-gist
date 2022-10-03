import { writable } from 'svelte/store';

export const createGistModal = writable(false);
export const deleteGistModal = writable(true);
