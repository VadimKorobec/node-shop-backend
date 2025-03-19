const { Schema, model } = require("mongoose");

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

const Product = model("product", productSchema);

module.exports = Product;
