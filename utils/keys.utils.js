

function getKeys() {
    const key = process.env.CREDIT_REPAIR_KEY;
    const sec = process.env.CREDIT_REPAIR_SEC;
    return { key: key, secret: sec };
}
module.exports = {
    getKeys
}