var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoUrl = 'mongodb://localhost:27017/students';
var Student = require('../models/students')

var studentsInClass = [
	"Paige", 
	"Danny", 
	"Jackson",
	"Shirlette",
	"Daniel",
	"Alex",
	"JT",
	"Eric",
	"David",
	"Brett",
	"Danielle",
	"Summer"
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/students', function(req, res, next){
	var studentToAdd = new Student({
		name: "Brett",
		gender: "male",
		age: 34,
		date: {type: Date, default: Date.now}
	});
});
// router.get('/students', function(req, res, next){
// 	db.collection('class').find().toArray(function(error, classResult){
// 		// req.query = the query string as an object!
// 		var studentNumber = req.query.student;
// 		res.render('students',{
// 			joeShmoe: studentsInClass,
// 			anotherVariable: [3,4,5,1234,2345,456,346],
// 			animals: [
// 				{
// 					name: 'zebra',
// 					weight: 'a lot'
// 				},
// 				{
// 					name: 'black bear',
// 					type: 'best'
// 				}
// 			],
// 			whoToHighlight: studentNumber
// 		});
// 	});
// });

// module.exports = router;