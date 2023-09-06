const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/book-routes');
const cors=require('cors');
// cors is used to send axios request to another server ie backend of our otherwise it is against browser securtiy
const app=express();
app.use(express.json());
app.use(cors());
app.use('/books',router);
 // write / books

 //mongodb+srv://Diwakar123:Diwakar123@cluster0.j4niy.mongodb.net/doctorsApp -- mongodb://localhost:27017/bookStore
mongoose.connect('mongodb+srv://Diwakar123:Diwakar123@cluster0.j4niy.mongodb.net/bookStore', { 
  useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to database MONGO CONNECTION OPEN!!!")})
        .then(()=>{
            app.listen(5000,(req,res)=>{
                console.log("server started at port 5000")
            })
        
                })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


    

     