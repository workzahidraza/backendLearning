const postModel = require("../models/imgUpload.model");

async function createPost(req, res) {
  const { name, age } = req.body;

  res.status(201).json({
    message: "post created sucessfully",
    name,
    age,
  });
}

module.exports = {
  createPost,
};
