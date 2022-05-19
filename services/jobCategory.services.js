const db =require("../config/db")

const { getKeys } = require('../utils/keys.utils');


async function getAll() {    
    // interact with DB and get user details by ID
    db.query("SELECT * FROM job_category",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    return { message: `get all job_category details` };
}


async function get(id) {    
    // interact with DB and get user details by ID
    db.query("SELECT * FROM job_category where id = ?",[id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    return { message: `get job_category ${id} details` };
}

async function create(category,unique_id) {
    
    db.query(
        "INSERT INTO job_category (category,unique_id) VALUES (?,?);",
        [category,unique_id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    return { message: `create job_category` };
}

async function update(id) { 
    db.query(
        "UPDATE job_category SET status = 'D' WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );


    return { message: `update job_category` };
}

async function remove(id) {
    db.query("DELETE FROM job_category WHERE id = ?",[id],(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });

    return { message: `remove job_category` };
}

module.exports = {
    create,
    update,
    remove,
    get,
    getAll
}