require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME


});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
{
    app.get("/api/suppliers", (req, res) => {

        pool.query("SELECT supplier_id, phone_no from supplier", (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(rows);
        });
    });

    app.get("/api/customers", (req, res) => {

        pool.query("SELECT customer_id,customer_name,phone_no from customer", (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(rows);
        });
    });

    app.get("/api/buy", (req, res) => {

        pool.query("SELECT customer_id,supplier_id from buy", (error, rows) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(rows);
        });
    });

    //posting
    app.post("/api/suppliers:name", (req, res) => {

        const supplier = req.body;
        console.log(supplier);
        if (!supplier.name) {
            return res.status(400).json({ error: "invalid payload" });
        }
        pool.query(
            "INSERT INTO supplier (supplier_name) values (?)",
            [supplier.supplier_name],
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error });

                }
                res.json(result.insert.id);

            });
        //posting
        app.post("/api/customer:name", (req, res) => {

            const customer = req.body;
            console.log(customer);
            if (!customer.name) {
                return res.status(400).json({ error: "invalid payload" });
            }
            pool.query(
                "INSERT INTO customer (customer_name) values (?)",
                [customer.customer_name],
                (error, results) => {
                    if (error) {
                        return res.status(500).json({ error });

                    }
                    res.json(result.insert.id);
                });


            app.listen(9000, function () {
                console.log("app listening on port 9000");



            });
        });
    })
};
