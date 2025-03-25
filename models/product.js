const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [
      {
        size: { type: String, required: true },
        _id: false,
      },
    ],
    description: { type: String, required: true },
    brand: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", (error, data, next) => {
  error.status(400);
  next();
});

const addSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.string().required(),
  sizes: Joi.array().items(Joi.string().required()),
  description: Joi.string().required(),
  brand: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Product = model("product", productSchema);

module.exports = {
  Product,
  schemas,
};
