const db=require("../config/db")
const {validationResult}=require("express-validator")

//DELETE STUDENT


const deleteStudent=async(req,res)=>{
   try {
    const studentId=req.params.id
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.json(errors.array())

    }else{
    if(!studentId){
        return res.status(404).send({
            success: false,
            message: "Invalid Student ID",
        })
    }
    const data=await db.query("DELETE FROM users WHERE id=?",[studentId])
    if(!data){
        return res.status(500).send({
            success: false,
            message: "Failed to delete student",
        })
    }
    res.status(200).send({
        success: true,
        message: "Student deleted successfully",
    })
}
    
   } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message: "Server Error",
        error
    })
    
   }
    }


module.exports={deleteStudent};