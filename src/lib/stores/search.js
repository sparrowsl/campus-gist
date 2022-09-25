import { writable } from 'svelte/store';

export const searchedValue = writable('');
export const searchFilter = writable('students');

export const studentSearchResults = writable([]);
export const studentFilteredResults = writable([]);

export const instituteSearchResults = writable([]);
export const instituteFilteredResults = writable([]);
