import { writable } from 'svelte/store';

export const searchFilter = writable('students');
export const searchedStudent = writable('');
export const studentSearchResults = writable([]);
export const filteredResults = writable([]);
