const HttpError = require("../helpers/HttpError");
const { Product } = require("../models/product");

exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.getByBrand = async (req, res, next) => {
  try {
    const { brand } = req.params;
    const result = await Product.find({ brand: new RegExp(`^${brand}$`, "i") });
    if (result.length === 0) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// if (!result) {
//   const error = new Error('Not found');
// error.status = 404;
// throw error
//   })
// }
