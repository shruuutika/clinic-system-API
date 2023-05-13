const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
const UserRoute = require('./route/userRoute')
const ClinicRoute = require('./route/clinicRoute')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// default route
app.get('/',(req,res)=>{
    res.send("This is Home page")
})

// Main route
app.use('/api/user',UserRoute)
app.use('/api/clinic',ClinicRoute)

app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
main()