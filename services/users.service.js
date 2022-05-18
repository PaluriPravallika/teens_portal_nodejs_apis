
const { getKeys } = require('../utils/keys.utils');



async function get(id) {
    // interact with DB and get user details by ID
    return { message: `get user ${id} details` };
    console.log('changes from branch 3')
}

async function create(user) {
    return { message: `create user` };
}

async function update(id, user) { 
    return { message: `update user` };
}

async function remove(id) {
    console.log('changes from branch 3')
    return { message: `remove user` };
}

module.exports = {
    create,
    update,
    remove,
    get
}