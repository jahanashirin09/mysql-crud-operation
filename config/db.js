const mysql=require("mysql2/promise");

const mysqlPool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"information",
});

module.exports=mysqlPool;