

const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   status: String,
//   dueDate: Date
// });

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['todo', 'in progress', 'done'], required: true },
  dueDate: { type: Date, required: true }
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
