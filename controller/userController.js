const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req,res)=>{
    try {
        const userExists = await User.findOne({email:req.body.email})
        if(userExists) return res.status(400).json({errors:true,message:"User already exists"})

        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const data = await User.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        const userExists = await User.findOne({email:req.body.email})
        if(!userExists) return res.status(400).json({errors:true,message:"User already exists"})

        const verifyPassword = await bcrypt.compare(req.body.password,userExists.password)
        if(!verifyPassword) return res.status(400).json({errors:true,message:"User already exists"})

        const token = await jwt.sign({id:userExists._id},process.env.SEC)

        return res.json({errors:false,data:{token:token,User:userExists}})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.getuser = async (req,res)=>{
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putuser = async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteuser = async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}