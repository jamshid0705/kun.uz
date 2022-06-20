const express = require('express')
const app = express()
const router=require('./router')

const cors = require('cors')
app.use(cors())

app.use('/results',router)


module.exports=app