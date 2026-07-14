const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { userName, userEmail, userPassword, userBio, userProfilePic } =
    req.body;
  const alreadyRegistered = await userModel.findOne({
    $or: [{ userName: userName }, { userEmail: userEmail }],
  });
  if (alreadyRegistered) {
    return res.status(409).json({
      message: "user is already registered",
    });
  }

  const hashPassword = await bcrypt.hash(userPassword, 10);
  const user = await userModel.create({
    userName,
    userEmail,
    userBio,
    userPassword: hashPassword,
    userProfilePic,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.userName,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "user registered successfully",
    data: {
      userName: userName,
      userEmail: userEmail,
      userBio: userBio,
      userPassword: userPassword,
      userProfilePic: userProfilePic,
    },
  });
}

module.exports = {
  registerUser,
};
