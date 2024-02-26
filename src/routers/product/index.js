const express = require("express");
const router = express.Router();
const ProductController = require("../../controllers/app1/product.controllers.js");
const { asyncHandle } = require("../../helpers/asyncHander");

router.get("/create-product", asyncHandle(ProductController.createProduct) );
module.exports = router;
