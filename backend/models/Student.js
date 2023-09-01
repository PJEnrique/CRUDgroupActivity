const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  First_Name: {
     type: String,
    required: true
  },
  Last_Name: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    required: true
  },
  Course: {
    type: String,
    required: true
  },
  Section: {
    type: String,
    required: true
  },
  
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student