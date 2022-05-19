var express = require('express');
var router = express.Router();
const jobCategoryController = require('../controllers/jobCategory.controller');
var cors = require ('cors')

// /* GET users listing. */
// router.get('/', usersController.get);

/* GET job listing. */
router.get('/:id',cors(), jobCategoryController.get);

/* POST job listing. */
router.post('/',cors(), jobCategoryController.create);

/* PATCH job listing. */
router.patch('/:id',cors(), jobCategoryController.update);

/* DELETE job listing. */
router.delete('/:id',cors(), jobCategoryController.remove);

module.exports = router;