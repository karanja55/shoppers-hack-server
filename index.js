const express =require("express");
const mysql =require("mysql");
const app = express();
const pool =mysql.createPool({
    host:"localhost",
    user:"root",
    password:"mufasa55",
    database:"shoppers_hack"

});

app.get("/",function (req, res)  {
// logic

   res.json({message:"hello clement"});


});
app.get("/api/suppliers",(req,res)=>{
    pool.query("SELECT phone no,name FROM supplier",(error,rows)=>{
        if(error){
            return res.status(500).json({error});
        }
        res.json(rows);
    });
});
app.listen(9000,function(){
    console.log("app listening on port 9000");

});


