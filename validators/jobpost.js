const Joi=require('joi');

const jobpost_schema=Joi.object({
    Name_of_organization: Joi.string()
    .required(),
    Job_description:Joi.string().required() ,
    work_timings:Joi.string(),
    state:Joi.string(),
    city:Joi.string(),
    zip_code:Joi.string().max(5),
    contact_details: Joi.string(),


})
module.exports = {
    userSchema: jobpost_schema
}