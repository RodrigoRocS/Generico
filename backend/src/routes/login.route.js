const express = require('express');

const loginController = require('../controllers/login.controller')

const route = express.Router();

route.post('/', loginController)

module.exports = route;