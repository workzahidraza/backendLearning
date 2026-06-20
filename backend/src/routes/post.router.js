const express = require("express");
const postRouter = express.Router();
const postContoller = require("../controllers/post.controller");

// https://localhost:3000/api/auth/upload
postRouter.post("/upload", postContoller.createPost);

module.exports = postRouter;
