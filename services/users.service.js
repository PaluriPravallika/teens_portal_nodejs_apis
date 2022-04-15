const convert = require('xml-js');
const { baseURL } = require('../config/general.config');
const { getKeys } = require('../utils/keys.utils');
const userValidator = require('../validators/user.validator');
const axios = require('axios').default


async function get(id) {
    console.log('get', id);
    const {key, secret} = getKeys()
    console.log(key, secret, 'mani');
    const req = {
        crcloud: {
            client: {
                id:id
            }
        }
    }

    var xmlReq = convert.json2xml(req, { compact: true })
    const url = `${baseURL}/lead/viewRecord?apiauthkey=${key}&secretkey=${secret}&xmlData=${xmlReq}`
    let resp = null

    try {
        const result = await axios.get(url);
        resp = result
    } catch (error) {
        return { message: JSON.stringify(error) }
    }
    return { message: convert.xml2js(resp.data, {compact: true, spaces: 4}) };
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
    const {key, secret} = getKeys()
    let resp = null
    const url = `${baseURL}/lead/insertRecord?apiauthkey=${key}&secretkey=${secret}&xmlData=${x}`
    try {
        const result = await axios.post(url);
        resp = result
    } catch (error) {
        return { message: JSON.stringify(error) }
    }
    return { message: convert.xml2js(resp.data, {compact: true, spaces: 4}) };
}

async function update(id, user) {
    user.type = 'Client'
    const { value, error } = userValidator.userSchema.validate(user)
    value.id = id;
    if (error !== undefined) {
        return error
    }
    
    const req = {
        crcloud: {
            lead: value
        }
    }

    var x = convert.json2xml(req, { compact: true })
    const {key, secret} = getKeys();
    let resp = null
    const url = `${baseURL}/lead/updateRecord?apiauthkey=${key}&secretkey=${secret}&xmlData=${x}`
    try {
        const result = await axios.patch(url);
        resp = result
    } catch (error) {
        return { message: JSON.stringify(error) }
    }
    return { message: convert.xml2js(resp.data, {compact: true, spaces: 4}) };
}

async function remove(id) {
    const {key, secret} = getKeys();
    const req = {
        crcloud: {
            client: {
                id:id
            }
        }
    }

    var xmlReq = convert.json2xml(req, { compact: true })
    const url = `${baseURL}/lead/deleteRecord?apiauthkey=${key}&secretkey=${secret}&xmlData=${xmlReq}`
    let resp = null

    try {
        const result = await axios.delete(url);
        resp = result
    } catch (error) {
        return { message: JSON.stringify(error) }
    }
    return { message: convert.xml2js(resp.data, {compact: true, spaces: 4}) };
 
}

module.exports = {
    create,
    update,
    remove,
    get
}