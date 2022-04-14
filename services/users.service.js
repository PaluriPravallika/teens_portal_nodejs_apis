const convert = require('xml-js');
const { baseURL } = require('../config/general.config');
const userValidator = require('../validators/user.validator');
const axios = require('axios').default


async function get() {
    return { message: `HGH ${process.env.CREDIT_REPAIR_KEY}` };
}

async function create(user) {
    user.type = 'Client'
    const { value, error } = userValidator.userSchema.validate(user)
    if (error !== undefined) {
        return error
    }
    
    const req = {
        crcloud: {
            lead: value
        }
    }

    var x = convert.json2xml(req, { compact: true })
    const key = process.env.CREDIT_REPAIR_KEY;
    const sec = process.env.CREDIT_REPAIR_SEC
    let resp = null
    const url = `${baseURL}/lead/insertRecord?apiauthkey=${key}&secretkey=${sec}&xmlData=${x}`
    try {
        const result = await axios.post(url);
        resp = result
    } catch (error) {
        return { message: JSON.stringify(error) }
    }
    return { message: convert.xml2js(resp.data, {compact: true, spaces: 4}) };
}

async function update() {
    return { message: 'updated' };
}

async function remove(id) {
    return { message: 'removed' };
}

module.exports = {
    create,
    update,
    remove,
    get
}