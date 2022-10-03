import { writable } from 'svelte/store';

export const institutes = writable([
	{
		name: 'BlueCrest College',
		abbr: 'BCC'
	},
	{
		name: 'Fourah Bay College',
		abbr: 'FBC'
	},
	{
		name: 'Institute of Public Administration and Management',
		abbr: 'IPAM'
	},
	{
		name: 'Njala University',
		abbr: 'Njala'
	},
	{
		name: 'College of Digital Excellence',
		abbr: 'CODE'
	},
	{
		name: 'Canadian College of Modern Technology',
		abbr: 'CCMT'
	},
	{
		name: 'College of Agriculture and Technology',
		abbr: 'CAT'
	},
	{
		name: 'American College of Science and Technology',
		abbr: 'ACOSAT'
	},
	{
		name: 'College of Business and Information and Technology',
		abbr: 'COBIT'
	},
	{
		name: 'Limkokwing University of Creative Technology',
		abbr: 'LUCT'
	},
	{
		name: 'AI Professional College',
		abbr: 'AIPro'
	},
	{
		name: 'Other Institute',
		abbr: 'other institute'
	}
]);
