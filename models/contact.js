const {Schema, model} = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError.js");
const Joi = require("joi");

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      favorite: {
        type: Boolean,
        default: false,
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
},
{versionKey: false, timestamps: true});

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);



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
const schemas = {createContactSchema,
  updateContactSchema, 
  updateFavoriteSchema
}

module.exports = {Contact,
  schemas
};


