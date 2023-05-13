const Clinic = require('../models/clinic')

exports.getclinic = async (req,res)=>{
    try {
        const data = await Clinic.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postclinic = async (req,res)=>{
    try {
        const data = await Clinic.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.puttclinic = async (req,res)=>{
    try {
        const data = await Clinic.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteclinic = async (req,res)=>{
    try {
        const data = await Clinic.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}