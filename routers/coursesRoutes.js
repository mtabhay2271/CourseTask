const router = require("express").Router();
const Course = require("../model/course");


//geting new Course request
router.get("/", async (req, res) => {
  try {
    const course = await Course.create(req.query)
    const allCourse = await Course.find()
    res.render('index',{allCourse});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

router.get("/hcourses", async (req, res) => {
  try {
    const course = await Course.find()
    //console.log("Course--------",course);
    res.render('hcourses',{allCourse : course});
   // res.status(200).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

router.get("/jcourses", async (req, res) => {
  try {
    const course = await Course.find()
    //console.log("Course--------",course);
    res.render('jcourses',{allCourse : course});
    // res.status(200).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
