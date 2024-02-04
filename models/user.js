const {Schema, model} = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError.js");
const Joi = require("joi");

const userSchema = new Schema({
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
    default:""}
  }, {versionKey: false, timestamps: true});

  userSchema.post("save", handleMongooseError);
  
  const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const registerSchema = Joi.object({
    password:Joi.string().required(),
    email:Joi.string().required(),
    subscription:Joi.string()
  });
  const loginSchema = Joi.object({
    password:Joi.string().required(),
    email:Joi.string().required()
  });
  const schemas = {
    loginSchema,
    registerSchema
  };

  const User = model("user", userSchema);

  module.exports = {
    User,
    schemas
  };