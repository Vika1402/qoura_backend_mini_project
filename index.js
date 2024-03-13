const express = require("express");

const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


let posts=[
  {
    username:"vikas kumar",
    content:"I love coding ",

  },
  {
    username:"mehata ji ",
    content:"tark mehta ka ulta chasma ",
    
  },
  {
    username:"jetha lal",
    content:"I love gujrat ",
    
  },
  {
    username:"bidhe uncle ",
    content:"i am marathi man ",
    
  }
];


app.get("/posts",(req,res)=>{
  res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
  res.render("new.ejs",{posts})
})

app.post("/posts",(req,res)=>{
  let {username,content}=req.body;
  posts.push({username,content})
  res.send("post send successfully")
})


app.listen(port, (req, res) => {
  console.log("listing port number", port);
});
