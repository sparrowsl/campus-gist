import { writable } from 'svelte/store';

export let chatMessages = writable([
	{
		author: 'johndoe',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, rerum?'
	},
	{
		author: 'johndoe',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, rerum?'
	}
]);
