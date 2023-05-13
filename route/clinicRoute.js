const {getclinic,postclinic,puttclinic,deleteclinic} = require('../controller/clinicController')
const auth = require('../middleware/auth')

const route = require('express').Router()

route.get('/',getclinic)
route.post('/',auth,postclinic)
route.put('/:id',puttclinic)
route.delete('/:id',deleteclinic)

module.exports = route