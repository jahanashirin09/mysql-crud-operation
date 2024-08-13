const db=require("../config/db")


//UPDATE STUDENT


const updateStudent= async(req,res) =>{
    try {

        const studentId=req.params.id
        if(!studentId){
            return res.status(404).send({
                success: false,
                message: "Invalid Student ID",
            })
        }
        const{name,roll_no,division}=req.body
        const data=await db.query(`UPDATE Student SET name=?,roll_no=?,division=? WHERE id=?`,[name,roll_no,division,studentId])
        if(!data){
            return res.status(500).send({
                success: false,
                message: "Failed to update student",
            })
        }
        res.status(200).send({
            success: true,
            message: "Student updated successfully",
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ 
        success:false,
        message: "Server Error",
        error
        })
    }
};
module.exports={updateStudent};

