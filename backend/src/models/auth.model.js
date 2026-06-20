const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "please enter username"],
      unique: true,
    },
    userEmail: {
      type: String,
      required: [true, "please enter email"],
      unique: true,
    },
    userPassword: {
      type: String,
      required: [true, "please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

const authModel = new mongoose.model("auth", authSchema);

module.exports = authModel;
