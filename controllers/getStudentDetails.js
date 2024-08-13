const db=require("../config/db")


//GET ALL STUDENT LIST
const getStudents=async(req,res)=>{
    try{
        const data=await db.query("SELECT * FROM Student");
        if(!data){
            return res.status(404).send({
             success: false,
             message: "No students found",
            })

        }
        res.status(200).send({
            success: true,
            message:"all students record found",
            totalStudents:data[0].length,
            data:data[0],
        });
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Server Error",
            error
        })
    
}
};
module.exports={getStudents};