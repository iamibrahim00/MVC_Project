const path = require('path')
const express= require('express');
const router = express.Router()
const rootDir = require('../helper/path')
const products=require('../controllers/products')

// admin/add-product => GET
router.get('/add-product',products.getAddproducts);

//admin/add-product => POST
router.post("/add-product",products.postAddproducts)


module.exports = router