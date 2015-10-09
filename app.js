var restify = require('restify');
var mongojs = require('mongojs');
var dbase = 'mongodb://localhost/org-payment';
var collection = ['Student'];

db = mongojs(dbase,collection);

// Server
var server = restify.createServer();
restify.CORS.ALLOW_HEADERS.push('authorization');

server
 .use(restify.CORS())
 // .use(restify.fullResponse())
 .use(restify.bodyParser())
 .use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    return next();
  }
);

server.listen(3000, function () {
    console.log("Server started at port:3000");

});

server.get('/user',function (req,res,next) {
  db.Student.find(function (err, Student) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.end(JSON.stringify(Student));
    });
    return next();
});

server.post('/user', function (req, res, next) {
    var Student = req.params;
    db.Student.save(Student,
        function (err, data) {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.end(JSON.stringify(data));
        });
    return next();
});
//
// server.get('/user/count', function(req,res,next){
//   db.Student.count('count', function (err,cout){
//   res.end(cout);
//   });
//   return next();
// });

// function addUser(name,studentNumber,course,yearLevel,address){
//   name:           req.params.name,
//   studentNumber:  req.params.studentNumber,
//   course:         req.params.course,
//   yearLevel:      req.params.yearLevel,
//   address:        req.params.address
// }

server.put('/user/:_id', function(req,res,next){

  db.Student.findOne({id: req.params.id},
  function(err,data){
    var upUser = {};

    for(var n in data){
      upUser[n] = data[n];
    }

    for(var n in req.params){
      upUser[n] = req.params[n];
      console.log(upUser[n]);
    }
//..update here
    db.Student.update({id: req.params.id}, upUser, {multi:false},
    function(err,data){
      if (err) throw err;
      res.setHeader('Content-Type', 'application/json');
      res.status(200);
      res.end(JSON.stringify(data));
    });
    return next();
  });
});

server.del('/user/:_id', function(req,res,next){
  db.Student.remove({id: req.params.id},function(err,data){
    console.log('id to be deleted is: '+req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify(data));
    if(err) throw err;
  });
  return next();
});

module.exports = 'app';
