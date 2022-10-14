import { writable } from 'svelte/store';

export const updatedGist = writable({});
export const gists = writable([
	{
		id: 1,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [{}],
		body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
	},
	{
		id: 2,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [{}, {}],
		body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
	},
	{
		id: 3,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'
	},
	{
		id: 4,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'
	},
	{
		id: 5,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque'
	},
	{
		id: 6,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae'
	},
	{
		id: 7,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas'
	},
	{
		id: 8,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae'
	},
	{
		id: 9,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas'
	},
	{
		id: 10,
		author: {
			username: 'johndoe',
			fullname: 'John Doe',
			image: '/images/default.png'
		},
		comments: [],
		body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error'
	}
]);
