import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose"
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";



const PORT = process.env.PORT || 5000 ;
// const uri = process.env.MONGODB_URI;




const app = express();
app.use(cors());
app.use(express.json());
app.use( "/api/user",router)
app.use("/api/blog" , blogRouter)

//   : step heroku

// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("frontend/build"))
// }





mongoose.set("strictQuery", false);
mongoose
.connect(process.env.MONGODB_URI)
    .then(() => app.listen( PORT))
    .then(() => console.log("Connected to Database or listening to the port 5000"))
    .catch(function(err){ console.log(err)});

    


//middleware
// app.use("/api" , function(req , res , next){
//     res.send("Hello WOrld")
// });


// app.listen(5000)
// app.listen(3000 , function(req , res){
//     console.log("Server is running on port 3000");
// });





// password mongoDB Atlas Cluster =  admin123
