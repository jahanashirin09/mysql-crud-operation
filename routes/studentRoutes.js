const express=require("express");
const { getStudents } = require("../controllers/getStudentDetails");
const { getStudentsByID } = require("../controllers/getStudentById");
const { createStudent } = require("../controllers/createStudent");
const { updateStudent } = require("../controllers/updateStudentDetails");
const { deleteStudent } = require("../controllers/deleteStudentDetails");


const router=express.Router()

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