
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { errorHandler } = require('./middleware/error');
// const { logger } = require('./middleware/logger');
// const Task = require('./models/task');
const taskRoutes = require('./routes/task');

// const app = express();
// const PORT =  8000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// // app.use(logger);

// app.get("/", (req, res) => {
//   res.send("Welcome our to  API...");
// });


// // Connect to MongoDB
// // mongoose.connect('mongodb://0.0.0.0:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

// // Routes
// app.use('/tasks',taskRoutes);

// // Error handling middleware
// // app.use(errorHandler);

// // Start server
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });


























const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./models/task");
const validate = require("./middleware/validation")
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

// app.use("/api/register", register);
// app.use("/api/login", login);


app.get("/", (req, res) => {
  res.send("Welcome our to  API...");
});

// app.use("/task",Task)
app.use('/tasks',taskRoutes);
const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect("mongodb://0.0.0.0:27017/taskManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
