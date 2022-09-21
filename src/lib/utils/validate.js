import Joi from 'joi';

export const loginValidation = Joi.object({
	email: Joi.string().email({
		tlds: { allow: ['com', 'net'] }
	}),
	password: Joi.string().min(4)
});
