import mongoose from "mongoose";

const task = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", task);

export default Task;
