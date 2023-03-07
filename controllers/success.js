const path =require('path')
const rootDir = require('../helper/path')

exports.SuccessController=(req,res,next)=>{
    res.render(path.join(rootDir,'views','success.ejs'))
}