var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller');

// /* GET users listing. */
// router.get('/', usersController.get);

/* GET users listing. */
router.get('/:id', usersController.get);

/* POST users listing. */
router.post('/', usersController.create);

/* PATCH users listing. */
router.patch('/:id', usersController.update);

/* DELETE users listing. */
router.delete('/:id', usersController.remove);

module.exports = router;
