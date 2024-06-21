const express=require("express");
const app=express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/about",function(req,res){
  res.sendFile(__dirname+"/about.html");
});

app.get("/contact",function(req,res){
  res.sendFile(__dirname+"/contact.html");
});

app.get("/add_location",function(req,res){
  res.sendFile(__dirname+"/add_location.html");
});


app.post("/add_location",function(req,res){
  const name=req.body.location;
  const time=req.body.time;
  const placedis=req.body.placedis;
  console.log(name);
  console.log(time);
  console.log(placedis);
   res.send("thanks for submitting");
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});