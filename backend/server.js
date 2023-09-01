require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// routes
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('Listening in port', process.env.PORT)
})