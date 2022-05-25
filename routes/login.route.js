var express = require('express');
var router = express.Router();
var cors = require ('cors');
const {register_schema}=require('../validators/login.validator');

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
module.exports = router;
