const express = require("express");

const app = express(); //initilazied

app.get("/", (req, res) => {
  res.send("hello from root");
});

app.get('/about',(req,res)=>{
    res.send('hello from about')
})

app.listen(3000, () => {
  console.log("server started");
}); // running on port 3000
