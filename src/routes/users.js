const express = require('express');
const userController = require('./../controllers/user.controller');
let router = express.Router();

router.get('/', userController.index);
router.get('/:id', userController.find);
router.post('/', userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;