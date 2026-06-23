const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "enter username"],
    unique: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: [true, "enter user email"],
    unique: true,
    trim: true,
  },
  userPassword: {
    type: String,
    required: [true, "enter the password"],
  },
  userBio: String,
  userProfilePic: {
    type: String,
    default:
      "https://ik.imagekit.io/0eiec88vi/instaClone%20project%20profile%20pic.webp?updatedAt=1779449227976",
  },
});
const userModel = new mongoose.model("userInfo", userSchema);

module.exports = userModel;
