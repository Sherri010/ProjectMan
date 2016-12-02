var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema({
  name: String,
  description: String,
  tech:[String],
  image:String,
  team:Boolean
});

var Project = mongoose.model('Todo', Project);

module.exports = Project;
