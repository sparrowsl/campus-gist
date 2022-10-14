import Joi from 'joi';

export const loginValidation = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required(),
	password: Joi.string().min(6).required()
});

export const registerValidation = Joi.object({
	fullname: Joi.string(),
	username: Joi.string().required(),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required(),
	institution: Joi.string(),
	password: Joi.string().min(6).required(),
	confirmPassword: Joi.ref('password')
});
