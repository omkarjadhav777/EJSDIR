const express=require("express");
const app=express();
const path=require("path");
const port=8080;

// app.use(express.static("public"));//suppose staring from other directiory then not run 

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.get("/rolldice",(req,res)=>{
  let diceVal=Math.floor(Math.random()*6)+1

//  res.render("rolldice.ejs",{num:diceVal});//anothor name also
// res.render("rolldice.ejs",{diceval:diceVal}); //same name also
res.render("rolldice.ejs",{diceVal});//we use one word also 
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    

    // console.log(instaData);
    // const followers=["adam","bob","steve","abc"];
    // let {username}=req.params;
    //console.log(username);
    //res.render("rolldice.ejs",{username});
    const data=instaData[username];
    console.log(data);
    // res.render("instagram.ejs",{data:instaData[username]});
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
   
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

   