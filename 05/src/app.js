const express = require("express");

const app = express();
const notesModel = require("./modules/notes.module");

app.use(express.json());

const notes = [];

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await notesModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "note created successfully",
    note,
  });
});

module.exports = app;
