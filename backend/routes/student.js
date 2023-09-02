const express = require('express');
const Student = require('../models/Student');
const router = express.Router();
// Create a new student
router.post('/student/post', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all student
router.get('/student/get', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Read one student
router.get('/student/getOne/:id', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a student
router.put('/student/put/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a student
router.delete('/student/delete/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndRemove(req.params.id);
    res.json(student);
    console.log("deleted successfully");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete All student
router.delete('/student/deleteAll', async (req, res) => {
  try {
    const student = await Student.deleteMany(req.params.id);
    res.json(student);
    console.log("All data are deleted successfully");
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});


module.exports = router


