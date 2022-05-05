var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller');
var cors = require ('cors')
// /* GET users listing. */
// router.get('/', usersController.get);

/* GET users listing. */
router.get('/:id',cors(), usersController.get);

/* POST users listing. */
router.post('/',cors(), usersController.create);

/* PATCH users listing. */
router.patch('/:id',cors(), usersController.update);

/* DELETE users listing. */
router.delete('/:id',cors(), usersController.remove);

module.exports = router;
