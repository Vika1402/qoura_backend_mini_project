const { log } = require("console");
const express = require("express");

const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let posts = [
  {
    id: uuidv4(),
    username: "vikas kumar",
    content: "I love coding ",
  },
  {
    id: uuidv4(),
    username: "mehata ji ",
    content: "tark mehta ka ulta chasma ",
  },
  {
    id: uuidv4(),
    username: "jetha lal",
    content: "I love gujrat ",
  },
  {
    id: uuidv4(),
    username: "bidhe uncle ",
    content: "i am marathi man ",
  },
];

// see all post in a page
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
//to add new post using form page
app.get("/posts/new", (req, res) => {
  res.render("new.ejs", { posts });
});
// after submit is redirest and show all post
app.post("/posts", (req, res) => {
  let id=uuidv4();
  let { username, content } = req.body;
  posts.push({id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
              
  res.render("show.ejs", { post });
});

app.patch("/posts/:id",(req,res)=>{
let {id}=req.params;
let newContent=req.body.content;
let post = posts.find((p) => id === p.id);
post.content=newContent;
console.log(post);
res.send("patch is working yar ")
})

app.get("/post/id/edit",(req,res)=>{
  let {id}=req.params;
  let post = posts.find((p) => id === p.id);
  


})
app.listen(port, (req, res) => {
  console.log("listing port number", port);
});
