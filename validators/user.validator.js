const Joi = require('joi');

const schema = Joi.object({
    firstname: Joi.string()
        .alphanum()
        .min(3)
        .max(45)
        .required()
        .label('First Name'),

    lastname: Joi.string()
        .alphanum()
        .min(3)
        .max(45)
        .required()
        .label('Last Name'),
    middlename: Joi.string()
        .max(45)
        .label('Middle Name'),
    suffix: Joi.string()
        .alphanum()
        .max(45),
    email: Joi.string()
        .required().label('Email')
        .email({ minDomainSegments: 2 }),
    phone_home: Joi.number(),
    street_address: Joi.string()
        .max(200),
    city: Joi.string()
        .max(100)
        .alphanum(),
    type: Joi.string(),
    state: Joi.string(),
    zip: Joi.string().max(5),
    ssno: Joi.string().max(4),
    birth_date: Joi.date().less('now'),
    memo: Joi.string(),
    previous_mailing_address: Joi.string(),
    previous_city: Joi.string(),
    previous_state: Joi.string(),
    previous_zip: Joi.string().max(5),
    client_portal_access: Joi.string(),
    client_userid: Joi.string(),
    client_agreement: Joi.string(),
    send_setup_password_info_via_email: Joi.string(),
    phone_mobile: Joi.string(),
    phone_work: Joi.string(),
    phone_work_ext: Joi.string(),
    fax: Joi.string(),
    referred_by_email: Joi.string()


})

module.exports = {
    userSchema: schema
}