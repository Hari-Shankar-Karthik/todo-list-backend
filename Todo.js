const mongoose = require("mongoose");
const { schema } = mongoose;

const todoSchema = new mongoose.Schema({
  task: String,
  isCompleted: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
