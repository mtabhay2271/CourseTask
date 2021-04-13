const express = require('express');
const db=require('./db')
const app=express();
const courseRoute=require('./routers/coursesRoutes')

const Course = require("./model/course");

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//passing routes
app.use('/course',courseRoute);


app.get('/', async (req,res)=>{
  console.log('server created')
  const allCourse = await Course.find()
    res.render('index',{allCourse});
});

app.get('/', async (req,res)=>{
 
  console.log('server created')

  const allCourse = await Course.find()
    console.log("Course test",);
    let allCourse1=[],allCourse2=[];
    for(let i=0;i<allCourse.length;i++){
      if(1%2==0){
        allCourse1.push(allCourse[i])
      }else{
        allCourse2.push(allCourse[i])
      }
    }
    
    res.render('index',{allCourse});
});


PORT=3000;
app.listen(PORT,()=>console.log(`server is runnig on port ${PORT}`));




