const path = require('path')
const express= require('express');
const router = express.Router()
const rootDir = require('../helper/path')
const successControl = require('../controllers/success')


router.get('/success',successControl.SuccessController);


module.exports = router