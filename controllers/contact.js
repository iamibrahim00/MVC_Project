const path =require('path')
const rootDir = require('../helper/path')

exports.getContactController = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
}

exports.postContactController =(req,res)=>{
    res.redirect('/success') 
}

