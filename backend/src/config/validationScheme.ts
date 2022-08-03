import * as Joi from 'joi';

const validationSchema = Joi.object({
  PORT: Joi.number().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_PORT: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_DATABASE: Joi.string().required(),
});

export default validationSchema;
