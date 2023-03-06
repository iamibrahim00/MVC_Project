const path =require('path')
const rootDir = require('../helper/path')

exports.SuccessController=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}