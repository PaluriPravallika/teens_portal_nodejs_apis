
const { getKeys } = require('../utils/keys.utils');



async function get(id) {
    // interact with DB and get user details by ID
    return { message: `get user ${id} details` };
}

async function create(user) {
    return { message: `create user` };
}

async function update(id, user) { 
    return { message: `update user` };
}

async function remove(id) {
    return { message: `remove user` };
 
}

module.exports = {
    create,
    update,
    remove,
    get
}