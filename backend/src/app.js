const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("../src/routes/auth.router");
const postRouter = require("../src/routes/post.router");

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth/", authRouter);
app.use("/api/auth/", postRouter);
module.exports = app;
