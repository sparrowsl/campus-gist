import { writable } from 'svelte/store';

export const feeds = writable([
	{
		id: 0,
		content:
			'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae',
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			email: 'johndoe@gmail.com',
			image: '/images/default.jpg'
		},
		comments: []
	},
	{
		id: 1,
		content:
			'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam',
		author: {
			username: 'janedoe',
			fullname: 'Jane Doe',
			email: 'jane@gmail.com',
			image: '/images/default.jpg'
		},
		comments: [{}]
	},
	{
		id: 2,
		content:
			'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum',
		author: {
			username: 'jack',
			fullname: 'Jack Smith',
			email: 'jsmith@gmail.com',
			image: '/images/default.jpg'
		},
		comments: [{}, {}]
	}
]);
