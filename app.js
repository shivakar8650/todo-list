const express =require("express");
const bodyParser= require("body-parser");
const date =require(__dirname+"/date.js");
const app =express();


const items=[ "Buy food","cook food","Eat food"];
const WorkItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
 app.set("view engine","ejs");
 app.get("/",function(req,res){
   const day = date.getdate();   
   res.render("list" ,{ListTitle:day ,Newlistitems:items});

 });


 app.post("/",function(req, res){
   
   const item = req.body.newitem;

    if(req.body.list === "Work"){
       WorkItems.push(item);
       res.redirect("/work");
    }else{
      items.push(item);
      res.redirect("/");
    }

  
 })

 app.get("/work",function(req, res){
    res.render("list" ,{ListTitle:"Work list" ,Newlistitems:WorkItems});
 });

//  app.post("/work" ,function(req,res){
//    let item= req.body.newitem;
//    WorkItems.push(item);
//    res.redirect("/work");
//  });

 app.listen("3000",function(){
     console.log("server start on port 3000");
 });