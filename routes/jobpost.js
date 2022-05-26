var express = require('express');
var router = express.Router();
const {jobpost_schema}=require('../validators')
var cors = require ('cors')
router.post("/jobpost",(req,res,next)=>{
    router.post('/',cors(), jobpostController.create);
    
}
)