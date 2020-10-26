const express = require ("express");
const bodyParser = require("body-Parser");
const app =express();

app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay;
  if (currentDay=== 6 || currentDay === 0){
    res.write("<h1>today is weekends!<h1>");
  } else {
  res.sendFile(__dirname +"/index.html")
  }

});


app.listen(3000, function(){
  console.log("server is running on port 3000");
})
