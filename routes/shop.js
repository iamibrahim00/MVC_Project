const path =require('path')
const express = require('express');
const router = express.Router()
const rootDir = require('../helper/path')
const products =require('../controllers/products')

router.get('/',products.shopAddproducts);

module.exports = router
