const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puppySchema = new Schema({
  answer: { type: Boolean, required: true },
  imageURL: { type: String },
  userName: String,
});

const Puppy = mongoose.model("Puppy", puppySchema);

module.exports = Puppy;
