const express = require("express");

const userController = require("../controllers/user.controller");
const validateNewUser = require('../middlewares/validateUser')

const route = express.Router();

route.put("/", validateNewUser, userController.createUser);

module.exports = route;
