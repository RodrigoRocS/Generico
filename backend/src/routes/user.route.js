const express = require("express");

const userController = require("../controllers/user.controller");

const route = express.Router();

route.put("/", userController.createUser);

module.exports = route;
