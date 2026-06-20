const authModel = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { userName, userEmail, userPassword } = req.body;

  const userAleradyRegistered = await authModel.findOne({
    $or: [{ userName }, { userEmail }],
  });

  if (userAleradyRegistered) {
    return res.status(409).json({
      message:
        userAleradyRegistered.userName == userName
          ? "user name is used"
          : "user email is used",
    });
  }
  const hash = await bcrypt.hash(userPassword, 10);

  const user = await authModel.create({
    userName,
    userEmail,
    userPassword: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "user registered sucessfully",
    data: {
      username: userName,
      useremail: userEmail,
    },
  });
}

async function loginUser(req, res) {
  const { userName, userEmail, userPassword } = req.body;
  const userFound = await authModel.findOne({
    $or: [{ userName }, { userEmail }],
  });
  if (!userFound) {
    return res.status(401).json({
      message: "invalid access",
    });
  }
  const hash = await bcrypt.compare( userPassword,userFound.userPassword);
  if (!hash) {
    return res.status(401).json({
      message: "password is invalid",
    });
  }

//   const user = await authModel.create({
//     userName,
//     userPassword:hash,
//     userEmail,
//   });
  const token = jwt.sign({
    id:userFound._id
  },process.env.JWT_SECRET,{expiresIn:"1d"});
  res.cookie("token", token);

  res.status(200).json({
    message: "user logged sucessfully",
  });
}
module.exports = {
  registerUser,
  loginUser,
};
