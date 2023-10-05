const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("Hello World")
})




app.listen(8888, () => {
  console.log("Listening for requests on port 3003");
});

module.exports = app;