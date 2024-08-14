const db=require("../config/db")

//GET STUDENT BY ID

const getStudentsByID =async(req,res)=>{
    try {
        const studentId=req.params.id
        if(!studentId){
            return res.status(404).send({
                success: false,
                message: "Invalid Student ID",
            })
        }
        const data=await db.query("SELECT * FROM users WHERE id=?",[studentId])
        if(!data){
            return res.status(404).send({
                success: false,
                message: "No student found with this ID",
            })
        }
        res.status(200).send({
            success: true,
            message: "Student record found",
            studentdetails:data[0],
        });
            

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Server Error",
            error
        })
        
    }
    
};
module.exports={getStudentsByID};