const Joi=require('joi');

const jobcategory_schema=Joi.object({
    id:Joi.number(),
    Unique:Joi.number(),
    jobcategory:Joi.string()
    


});
module.exports = {
    userSchema: jobcategory_schema
}