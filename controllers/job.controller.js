const jobService = require('../services/job.service');

// i need to getall controller here help me 

async function get(req, res, next) {
  console.log(req.params.id);

  try {
      res.json(await jobService.get(req.params.id));
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await jobService.create(req.body.job_description,req.body.payment,req.body.timestart,req.body.timeend,req.body.timmings,req.body.state,req.body.city,req.body.zipcode,req.body.contactdetails,req.body.updated_time));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await jobService.update(req.params.id));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await jobService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};