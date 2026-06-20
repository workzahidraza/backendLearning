const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  caption: {
    type: String,
  },
  photo_url: {
    type: String,
    default: "instaClone project profile pic.webp",
  },
  userRef: {
    ref: "auth",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const postModel = new mongoose.model("post", postSchema);

module.exports = postModel;
