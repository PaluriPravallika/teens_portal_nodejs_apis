var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controller');

/* GET users listing. */
router.get('/:id', usersController.get);

/* GET users listing. */
router.get('/:id', usersController.get);

/* POST users listing. */
router.post('/', usersController.create);

/* PATCH users listing. */
router.patch('/', usersController.update);

/* DELETE users listing. */
router.delete('/', usersController.remove);

module.exports = router;
