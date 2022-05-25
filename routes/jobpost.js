var express = require('express');
var router = express.Router();
const {jobpost_schema}=require('../validators')
var cors = require ('cors')
router.post("/signin",(req,res,next)=>{
    try{
        const{email,password}=req.body
        const result= await register_schema.validateAsync(req.body)
        console.log(result)
    } 
    catch(error){
        if(error.Joi==true) error.status = 555
        next(error)
    }
    res.send("signin")
}
)