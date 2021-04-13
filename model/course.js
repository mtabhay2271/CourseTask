const mongoose = require("mongoose");


//creating schema for course
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String
  },
  courseID:{
    type:String
  },
  duration:{
    type:String
  },
  discription:{
    type:String
  },
  tutor:{
    type:String
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});


module.exports = mongoose.model("course", courseSchema);
