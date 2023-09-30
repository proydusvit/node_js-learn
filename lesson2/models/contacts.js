const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const list = ["black", "white"];

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"]
    },
    phone: {
      type: String,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false
    },
    list: {
      type: String,
      enum: list,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true
    }
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),

  favorite: Joi.bool(),
  list: Joi.string()
    .valid(...list)
    .required()
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required()
});

const schemas = {
  updateFavoriteSchema,
  addSchema
};

contactSchema.post("save", handleMongooseError);
const Contact = model("contacts", contactSchema);

module.exports = { Contact, schemas };
