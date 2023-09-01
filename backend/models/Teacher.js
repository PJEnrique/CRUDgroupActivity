const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  First_Name: {
     type: String,
    required: true
  },
  Last_Name: {
    type: String,
    required: true
  },
  Subjects: {
    type: [String],
    required: true
  },
  Department: {
    type: String,
    required: true
  }
  
});
const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher