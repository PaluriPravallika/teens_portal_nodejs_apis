const Joi = require('joi');


const register_schema = Joi.object({
        email:Joi.string().email().lowercase().required(),
        password:Joi.string().min(8).required(),
})
module.exports = {
    userSchema: register_schema
}