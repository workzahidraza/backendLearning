const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const notesModel = mongoose.model("notes", createSchema);

module.exports = notesModel;
