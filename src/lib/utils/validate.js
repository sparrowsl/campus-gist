import { z } from 'zod';

export const loginValidation = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});

export const registerValidation = z.object({
	fullname: z.string().trim(),
	username: z.string().min(2).trim(),
	email: z.string().email(),
	password: z.string().min(6)
});
