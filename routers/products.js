const express = require("express");

const router = express.Router();

const productsCtrl = require("../controllers/products");

const validateBody = require("../middlewares/validateBody");
const isValidId = require("../middlewares/isValidId");

const { schemas } = require("../models/product");

router.get("/", productsCtrl.getAll);

router.get("/:id", isValidId, productsCtrl.getById);

router.get("/:brand", productsCtrl.getByBrand);

router.post("/", validateBody(schemas.addSchema), productsCtrl.addProduct);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  productsCtrl.updateById
);



module.exports = router;
