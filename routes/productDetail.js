const express = require('express');

const router = express.Router();
const productDetailController = require('../controllers/productDetail')

router.get("/", productDetailController.getProductDetail);

module.exports = router;