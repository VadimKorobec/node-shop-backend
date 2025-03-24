const Product = require("../models/product");

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
    const productsByBrand = await Product.find({ brand });
    res.status(200).json(productsByBrand);
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
