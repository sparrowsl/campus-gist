import Joi from 'joi';

export const loginValidation = Joi.object({
	email: Joi.string().email({
		allowFullyQualified: true,
		tlds: { allow: ['com', 'net'] }
	}),
	password: Joi.string().min(4)
});

export const registerValidation = Joi.object({});
