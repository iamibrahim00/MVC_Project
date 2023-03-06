const path =require('path')
const rootDir = require('../helper/path')

exports.getAddproducts=(req,res,next)=>{

    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.postAddproducts=(req,res)=>{
    res.redirect('/') 
}


exports.shopAddproducts=(req,res)=>{ 
    res.sendFile(path.join(rootDir,'views','shop.html'))
}

