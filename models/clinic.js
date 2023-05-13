const mongoose = require('mongoose')

const patienSchema = mongoose.Schema({
    appointmentTime:{
        type: String,
        require : true
    },
    symtoms:{
        type: String,
        require: true
    },
    createdAt:{
        type : Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('clinic',patienSchema)