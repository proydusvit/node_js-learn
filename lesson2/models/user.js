const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true
    },
    password: {
      type: String,
      minlenght: 6,
      required: true
    },
    avatarURL: {
      type: String
    },
    token: {
      type: String,
      requireda: true
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  token: Joi.string()
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required()
});

const schemasUser = {
  registerSchema,
  loginSchema
};

const User = model("user", userSchema);

module.exports = { User, schemasUser };
