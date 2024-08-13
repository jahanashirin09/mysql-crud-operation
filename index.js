const express=require("express");
const dotenv =require("dotenv");
const mysqlPool = require("../config/db");
const studentRoutes=require('./routes/studentRoutes')

dotenv.config();

const app=express();

app.use(express.json());
app.use("/api/v1/Student",studentRoutes);



app.get("/test",(req,res)=>{
    res.status(200).send("<h1>test</h1>");

});

const PORT=process.env.PORT||8000;


mysqlPool
.query("SELECT * FROM Student")
.then(()=>{
    console.log("Database Connected");

    app.listen(PORT,()=>{
        console.log("server running")
    });

})
.catch((error)=>{
    console.error(error);
});
