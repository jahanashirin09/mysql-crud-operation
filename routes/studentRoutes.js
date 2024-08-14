const express=require("express");
const { getStudents } = require("../controllers/getStudentDetails");
const { getStudentsByID } = require("../controllers/getStudentById");
const { createStudent } = require("../controllers/createStudent");
const { updateStudent } = require("../controllers/updateStudentDetails");
const { deleteStudent } = require("../controllers/deleteStudentDetails");
const mysqlPool =require("../config/db")
const db=require("../config/db")
var jwt=require("jsonwebtoken");

const router=express.Router()

router.post("/login", async(req,res)=>{
    if(req.body.username==undefined || req.body.password==undefined){
        res.status(500).send({error:"authentication failed"})
    }
    let username=req.body.username;
    let password=req.body.password;
    let qr=`select display_name from users where username='${username}' and password=sha1('${password}')`;


})

//GET ALL STUDENT LIST
router.get('/getall',getStudents);



//GET STUDENT BY ID
router.get('/get/:id',getStudentsByID);


//CREAT STUDENT||POST

router.post('/create',createStudent);


//UPDATE STUDENT

router.put('/update/:id',updateStudent);

//DELETE STUDENT

router.delete('/delete/:id',deleteStudent)

module.exports=router;