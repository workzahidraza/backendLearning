const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");

//http://localhost:3000/api/user/
userRouter.post("/register", userController.registerUser);
module.exports = userRouter;
