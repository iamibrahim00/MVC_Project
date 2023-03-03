const express = require('express');
const bodyparser = require('body-parser');


const app = express();

app.use(bodyparser.urlencoded({extended:true}))

app.use('/add-product',(req,res,next)=>{
    console.log("In the Middleware")
    res.send('<form action ="/product" method="POST"><input type="text" name="title"> <input type="text" name="Size"><button type="submit">Add</button></form>')
});

app.use("/product",(req,res)=>{
    console.log(req.body)
    res.redirect('/') 
})
app.use('/',(req,res)=>{
    //console.log("In the next Middleware") 
    res.send('<h1>Hello From Express</h1>')
});

app.listen(3000)