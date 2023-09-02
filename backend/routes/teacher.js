const express = require('express');
const Teacher = require('../models/Teacher');
const router = express.Router();
// Create a new teacher
router.post('/teacher/post', async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all teachers
router.get('/teacher/get', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Read one teachers
router.get('/teacher/getOne/:id', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a teacher
router.put('/teacher/put/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(teacher);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a teacher
router.delete('/teacher/delete/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    res.json(teacher);
    console.log("deleted successfully");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete All teacher
router.delete('/teacher/deleteAll', async (req, res) => {
  try {
    const teacher = await Teacher.deleteMany(req.params.id);
    res.json(teacher);
    console.log("All data are deleted successfully");
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});


module.exports = router