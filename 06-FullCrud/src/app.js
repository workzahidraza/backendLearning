const express = require("express");
const app = express();
app.use(express.json());
const notesModel = require("./models/notes.model");

const notes = [];

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const notes = await notesModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "notes model created successfully",
    notes,
  });
});

app.get("/notes", async (req, res) => {
  const note = await notesModel.find();

  res.status(200).json({
    note: note,
  });
});

app.delete("/notes/:index", async (req, res) => {
  const id = req.params.index;
  const deleteNote = await notesModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  const updateNote = await notesModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "notes updated ",
    
  });
});

module.exports = app;
