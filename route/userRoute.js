const {register,login,getuser,putuser,deleteuser} = require('../controller/userController')

const route = require('express').Router()

route.get('/',getuser)
route.post('/',register)
route.post('/login',login)
route.put('/:id',putuser)
route.delete('/:id',deleteuser)

module.exports = route