var mongoose = require('mongoose');
mongoose.connet('mongodb://localhost/portfolio');

var Project = require('./models/project');


var p = new Project({
  name: "Wanderly",
  description: "first group project",
  tech:["JS","HTML","CSS"],
  team:true
});


p.save(function(err, newProject) {
    if(err) { return console.log(err) }
    console.log("saved new project: ", p);
  });
