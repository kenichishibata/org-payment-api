// var restify = require('restify');
// //var userModel = require('./model/userModel.js');
// //
// var mongoose = require('mongoose');
//
// mongoose = mongoose.connect('mongodb://localhost/org-payment', function(err){if(err) throw err;});
// var Schema = mongoose.Schema;
// var Student = new Schema({
//  fname: String,
//  studentNumber: String,
//  course: String,
//  yearLevel: String,
//  address: String
// });
// var User = mongoose.model('User', Student);
// //
//
// var server = restify.createServer();
// server
//  .use(restify.fullResponse())
//  .use(restify.bodyParser())
//
//  server.get('/', function(req, res, next){
//   res.send('this the home directory, there is nothing here');
//  })
//
//  server.get('/user', function (req, res, next) {
//   User.find({}, function (error, users) {
//   res.send(users)
//   // res.send('This is the users directory');
//   })
//  })
//
//  server.post('/user', function (req, res, next) {
//  if (req.params.fname === undefined) {
//   return next(new restify.InvalidArgumentError(error +' must be supplied /n'))
//  }
//  var userData = {
//   fname:          req.params.fname,
//   studentNumber:  req.params.studentNumber,
//   course:         req.params.course,
//   yearLevel:      req.params.yearLevel,
//   address:        req.params.address
//  }
//  var user = new User(userData);
//  user.save(function (error, data) {
//   if (error) {
//    return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)))
//   }
//   else {
//    res.json(data);
//   }
//   res.send(201, user)
//  })
// })
//
// server.listen(7000, function() {
//   console.log('%s listening at %s', server.name, server.url);
// });
