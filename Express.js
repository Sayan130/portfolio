 let express = require('express');
 let app = express();
const path = require('path');
const hbs  = require('hbs');
 //set view
 //set view engine
 //use static path
 //register partials
 // register handlebars
 let staticPath = path.join(__dirname, "/templates");
//let partialpath = path.join(__dirname, "/templates/html");
let viewpath = path.join(__dirname, "/templates/html")


//hbs.registerPartials(partialpath);
app.set("view engine", "hbs");
app.set("views",viewpath);
app.use(express.static(staticPath));



 app.get("",(req, res)=>{

     res.render("./main")

 })
 app.get("/*",(req, res)=>{

    res.send("What are you looking for ?dude!!!")
 })
 app.listen(3000);




