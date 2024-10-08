const express=require("express");
const { getStudents } = require("../controllers/getStudentDetails");
const { getStudentsByID } = require("../controllers/getStudentById");
const { createStudent } = require("../controllers/createStudent");
const { updateStudent } = require("../controllers/updateStudentDetails");
const { deleteStudent } = require("../controllers/deleteStudentDetails");
const {login}=require("../controllers/login")
const {verifyToken}=require("../controllers/login")
const {check}=require("express-validator")

const mysqlPool =require("../config/db")


const router=express.Router()

router.post("/login", login);


//GET ALL STUDENT LIST
router.get('/getall',verifyToken,getStudents);



//GET STUDENT BY ID
router.get('/get/:id',verifyToken,getStudentsByID);


//CREAT STUDENT||POST

router.post('/create',verifyToken,createStudent);


//UPDATE STUDENT

router.put('/update/:id',verifyToken,updateStudent);

//DELETE STUDENT

router.delete('/delete/:id',[check("id").exists().withMessage("id is required").isNumeric().withMessage("id should be only numbers")],verifyToken,deleteStudent)

module.exports=router;