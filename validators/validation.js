import Joi from 'joi';

export const contactValidationSchema = Joi.object({
  Name: Joi.string().required(),
  Title: Joi.string().required(),
  Company: Joi.string().required(),
  Email: Joi.string().email().required(),
  Phone: Joi.string().required(),
  Address: Joi.string().required(),
  Birthday: Joi.string().required(),
  Notes: Joi.string().required(),
});
