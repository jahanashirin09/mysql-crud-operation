const db=require("../config/db")



//CREATE STUDENT

const createStudent=async(req,res)=>{
    try {
        const{id,username,password,display_name}=req.body
        if(!id||!username||!password||!display_name){
            return res.status(500).send({
                success: false,
                message: "Please provide all required fields",
            })
        }
        const data=await db.query("INSERT INTO users (id,username,password,display_name) VALUES (?,?,?,?)",[id,username,password,display_name])
        if(!data){
            return res.status(404).send({
                success: false,
                message: "Failed to create student",
            })
        }
        res.status(201).send({
          success: true,
          message: "Student created successfully",
          
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Server Error",
            error
        })
        
    }
}
module.exports={createStudent};

