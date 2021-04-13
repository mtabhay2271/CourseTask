const mongoose = require('mongoose');

//connecting database to
const uri = 'mongodb+srv://Course123:Course123@cluster0.cztqe.mongodb.net/CourseData?retryWrites=true&w=majority'

 module.exports=mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{

    if(!err){
        console.log('Database Connected')
    }else{
        console.log('OOPS!!!! FAIL TO CONNECT TO DB',err);
    }


    
})



