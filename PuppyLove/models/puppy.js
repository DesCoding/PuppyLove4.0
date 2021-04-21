const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puppySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
});

const Puppy = mongoose.model("Puppy", puppySchema);

module.exports = Puppy;
//reconfigure to create database - start in models folder
