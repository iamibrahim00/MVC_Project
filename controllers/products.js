const path =require('path')
const rootDir = require('../helper/path')
const Product = require("../models/product")
const fs=require('fs')

exports.getAddproducts=(req,res,next)=>{  
     res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

exports.postAddproducts=(req,res)=>{
    const product= new Product(req.body.title)
    product.save()
    res.redirect('/') 
}

exports.getproducts=(req,res)=>{ 
    Product.fetchAll(products=>{ 
        res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });    
    }) 
}

