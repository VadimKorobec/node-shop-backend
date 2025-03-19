const express = require("express");

const router = express.Router();

const productsCtrl = require("../controllers/products");

router.get("/", productsCtrl.getAll);

router.post("/", productsCtrl.addProduct);

module.exports = router;
