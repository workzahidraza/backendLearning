const express = require("express");
const postRouter = express.Router();
const postContoller = require("../controllers/post.controller");
const upload = require("../config/multer");

// https://localhost:3000/api/auth/upload
postRouter.post("/upload", upload.single("photo"), postContoller.createPost);

module.exports = postRouter;
