const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop')
const contactRouter = require('./routes/contact')
const successRouter = require('./routes/success')
const errorpg =require('./controllers/error')

const path =require('path')
const rootDir= require('./helper/path')

app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))
app.use('/',adminRouter)
app.use('/',shopRouter)
app.use('/',contactRouter)
app.use('/',successRouter)


app.use(errorpg.errorPage)

app.listen(3000)