const jobCategoryService = require('../services/job.service');

// i need to getall controller here help me 

async function get(req, res, next) {
  console.log(req.params.id);

  try {
      res.json(await jobCategoryService.get(req.params.id));
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await jobCategoryService.create(req.body.category, req.body.unique_id));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await jobCategoryService.update(req.params.id));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await jobCategoryService.remove(req.params.id));
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