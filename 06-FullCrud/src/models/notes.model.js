const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const notesModel = new mongoose.model("notes", notesSchema);

module.exports = notesModel;
