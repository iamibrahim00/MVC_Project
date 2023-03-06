const path = require('path')
const express= require('express');
const router = express.Router()
const rootDir = require('../helper/path')
const products=require('../controllers/products')

// admin/add-product => GET
router.get('/admin',products.getAddproducts);

//admin/add-product => POST
router.post("/admin/add-product",products.postAddproducts)

module.exports = router