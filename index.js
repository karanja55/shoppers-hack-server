const express =require("express");
const app = express();

app.get("/",function (req, res) {
// logic

   res.send("hello clement");


});
app.listen(9000,function(){
    console.log("app listening on port 9000");

});


