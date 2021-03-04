const express = require('express');
const listController = require('../controllers/listController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .post('/:listName', listController.createList)
  .delete('/:id', listController.deleteList);

module.exports = router;
