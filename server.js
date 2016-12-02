'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var Project = require('./models/project');

app.use(express.static('public'));

app.get('/',function(req,res){
  console.log("server hit");
  res.sendFile(__dirname+"/views/index.html");


});


app.listen(port,function(){
  console.log('Server fired on ',port);
});
