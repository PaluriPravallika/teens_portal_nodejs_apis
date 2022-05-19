const db =require("../config/db")

const { getKeys } = require('../utils/keys.utils');


async function getAll() {    
    // interact with DB and get user details by ID
    db.query("SELECT * FROM job",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    return { message: `get all job details` };
}


async function get(id) {    
    // interact with DB and get user details by ID
    db.query("SELECT * FROM job where id = ?",[id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    return { message: `get job ${id} details` };
}

async function create(job_description,payment,timestart,timeend,timmings,state,city,zipcode,contactdetails,updated_time) {
    var status ='A';
    db.query(
        
        "INSERT INTO job (job_description,payment,timestart,timeend,timmings,state,city,zipcode,contactdetails,status,updated_time) VALUES (?,?,?,?,?,?,?,?,?,?,?);",
        [job_description,payment,timestart,timeend,timmings,state,city,zipcode,contactdetails,status,updated_time],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    return { message: `create job` };
}

async function update(id) { 
    db.query(
        "UPDATE job SET status = 'D' WHERE id = ?",
        [id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );


    return { message: `update job` };
}

async function remove(id) {
    db.query("DELETE FROM job WHERE id = ?",[id],(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });

    return { message: `remove job` };
}

module.exports = {
    create,
    update,
    remove,
    get,
    getAll
}
