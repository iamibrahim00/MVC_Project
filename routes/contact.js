const path = require('path')
const express= require('express');
const router = express.Router()
const rootDir = require('../helper/path')


router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
});

router.post("/contact",(req,res)=>{
    res.redirect('/success') 
})
module.exports = router