const path =require('path')
const rootDir = require('../helper/path')

exports.errorPage=(req,res,next)=>{(
    res.status(404).render(path.join(rootDir,'views','pageerror.ejs'))
 )}