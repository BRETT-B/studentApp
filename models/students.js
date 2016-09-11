var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Student = new Schema({
	name: String,
	gender: String,
	age: Number;
});

module.exports = mongoose.model('Student', Student);

