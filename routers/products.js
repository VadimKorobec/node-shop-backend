const express = require("express");

const router = express.Router();

const productsCtrl = require("../controllers/products");

const validateBody = require("../middlewares/validateBody");

const { schemas } = require("../models/product");

router.get("/", productsCtrl.getAll);

router.get("/:brand", productsCtrl.getByBrand);

router.post("/", validateBody(schemas.addSchema), productsCtrl.addProduct);

module.exports = router;
