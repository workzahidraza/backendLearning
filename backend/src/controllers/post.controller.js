const postModel = require("../models/imgUpload.model");
const jwt = require("jsonwebtoken");
const client = require("../config/imagekit");
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources/index.js");

async function createPost(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "unauthorised access",
    });
  }
  let decoded = null;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "not access",
    });
  }

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: Date.now() + -+Math.random() * 1e7,
    folder: "try-clone",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    photo_url: file.url,
    userRef: decoded.id,
  });

  res.status(201).json({
    message: "Post created successfully.",
    post,
  });
}

module.exports = {
  createPost,
};
