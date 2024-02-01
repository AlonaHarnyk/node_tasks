const Joi = require("joi");

const createContactSchema = Joi.object({
name: Joi.string().required(),
email: Joi.string().required(),
phone: Joi.string().required(),
})

const updateContactSchema = Joi.object({
name: Joi.string(),
email: Joi.string(),
phone: Joi.string(),
})

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})
module.exports = {createContactSchema,
updateContactSchema, 
updateFavoriteSchema};