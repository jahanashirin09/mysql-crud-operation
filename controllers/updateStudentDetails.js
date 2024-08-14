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
        const{username,password,display_name}=req.body
        const data=await db.query(`UPDATE users SET username=?,password=?,display_name=? WHERE id=?`,[username,password,display_name,studentId])
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

