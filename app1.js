const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop')

app.use(bodyparser.urlencoded({extended:true}))
app.use('/admin',adminRouter)
app.use('/',shopRouter)

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3000)