const express = require('express');
const router = express.Router();
const Product = require('../models/productsModel');
const productPostController = require('../controller/productsPostController');
const productGetController = require('../controller/productsGetController');
const productPutController = require('../controller/productPutController');

router.post('/', productPostController);

router.get('/', productGetController);

router.put('/:id', productPutController);

module.exports = router;
