const express = require("express");
const app = express();
const noteModel = require("./models/notes.model");
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { name, age } = req.body;
  const notes = await noteModel.create({
    name,
    age,
  });

  res.status(201).json({
    message: "note created successfully",
    note: notes,
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    notes,
  });
});

module.exports = app;
