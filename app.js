import express from "express";
import mongoose from "mongoose"
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const dotenv = import('dotenv');
// const DATABASE = process.env.DATABASE;
const PORT = process.env.PORT;




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
.connect( 
    
     'mongodb+srv://admin:admin123@cluster1.grxnlua.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(() => app.listen( PORT || 5000))
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
