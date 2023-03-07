const path =require('path')
const rootDir = require('../helper/path')

exports.getContactController = (req,res,next)=>{
    res.render(path.join(rootDir,'views','contact.ejs'))
}

exports.postContactController =(req,res)=>{
    res.redirect('/success') 
}

