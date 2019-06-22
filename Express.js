 let express = require('express');
 let app = express();



 app.get("/",(req, res)=>{

     res.send("Hello")

 })
 app.get("/*",(req, res)=>{

    res.send("What are you looking for ?dude!!!")
 })
 app.listen(3000);




