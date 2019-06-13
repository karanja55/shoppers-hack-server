require("dotenv").config();
const express =require("express");
const mysql =require("mysql");
const app = express();
const pool =mysql.createPool({
   
   //host:process.env.DB_HOST,
    //user:process.env.DB_USER,
   // password:process.env.DB_PASS,
    //database:process.env.DB_NAME

});

app.get("/api/suppliers",(req,res)=>{
    
    pool.query("SELECT supplier_id,,phone_no from supplier",(error,rows)=>{
        if(error){
            return res.status(500).json({error});
        }
        res.json(rows);
    });app.get("/api/customers",(req,res)=>{
    
        pool.query("SELECT customer_id,customer_name,phone_no from customer",(error,rows)=>{
            if(error){
                return res.status(500).json({error});
            }
            res.json(rows);
        });
        app.get("/api/buy",(req,res)=>{
    
            pool.query("SELECT customer_id,supplier_id",(error,rows)=>{
                if(error){
                    return res.status(500).json({error});
                }
                res.json(rows);
            });
        });
    });
});
app.listen(9000,function(){
    console.log("app listening on port 9000");

});


