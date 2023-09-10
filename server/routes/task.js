const express = require('express');
const router = express.Router();
const Task = require('../models/task');

const { validateTask } = require('../middleware/validation');
// GET /tasks
router.get('/getalltask', async (req, res) => {

  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /tasks/:taskId
router.get('/:taskId', async (req, res) => {
    try {
      const task = await Task.findById(req.params.taskId);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  


// POST /tasks
router.post('/newtask', async (req, res) => {
  
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate
    });
  
    try {
      const newTask = await task.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

// PUT /tasks/:taskId
router.put('/:taskId', validateTask, async (req, res) => {
  try {
      const updatedTask = await Task.updateOne(
          { _id: req.params.taskId }, // Filter: Find the task by ID
          { 
              $set: {
                  title: req.body.title,
                  description: req.body.description,
                  status: req.body.status,
                  dueDate: req.body.dueDate
              }
          } // Update: Set the new values
      );

      if (updatedTask.nModified === 1) {
          res.json({ message: 'Task updated successfully' });
      } else {
          res.status(404).json({ message: 'Task not found' });
      }
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

  
// DELETE /tasks/:taskId

router.delete('/:taskId', async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const result = await Task.deleteOne({ _id: req.params.taskId });
    if (result.deletedCount === 1) {
      res.json({ message: 'Task deleted' });
    } else {
      res.status(500).json({ message: 'Error deleting task' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
