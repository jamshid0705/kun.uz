const express=require('express')
const kunController=require('./controller')

const routerUser=express.Router()

routerUser.route('/').get(kunController.getKUN)

module.exports=routerUser