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
 .use(restify.fullResponse())
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
//get one
server.get('/user/:id',function (req,res,next) {
    db.Student.findOne({_id: db.ObjectId(req.params.id)}, function(err, data) {
      if (err) throw err;
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.end(JSON.stringify(data));
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

server.put("/user/:id", function(req, res, next) {
    db.Student.findOne({
        _id: db.ObjectId(req.params.id)
    }, function(err, data) {
        //merge req.params/product with the server/product

        var updProd = {};
        for(var n in data) {

            updProd[n] = data[n];
            // console.log(JSON.stringify(updProd[n]));
        }
        for(var m in req.params) {
            updProd[m] = req.params[m];
            // console.log('---');
            // console.log(JSON.stringify(updProd[n]));
        }
        delete updProd._id;
        db.Student.update({_id: db.ObjectId(req.params.id)}, updProd, {multi: false}, function(err, data) {
            res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
            res.end(JSON.stringify(updProd));
        });
    });
    return next();
});
// damn it work properly update!
// server.put('/user/:id', function (req, res, next) {
//   var user = {};
//   user.id = req.params.id;
//   console.log('id ===  '+user);
//   var changes = req.params;
//   delete changes.id;
//   for(var x in changes) {
//     user[x] = changes[x];
//     console.log('user[x] ='+user[x]);
//   }
//   db.Student.update({_id:db.ObjectId(req.params.id)}, user,{multi:true,upsert:true}, function(err,data){
//   res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
//   res.end(JSON.stringify(user));
//
//   return next();
// });
// });

// server.put('/user/:_id', function (req, res, next){
//   var update = req.params;
//   var query = req.params._id;
//   console.log('query : '+query);
//   var updateDisplay = JSON.stringify(update);
//   console.log(updateDisplay);
//   console.log();
//   db.Student.update(query, update, {multi:true,upsert:true},function(err, result) {
//     res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
//     res.end(JSON.stringify(update));
//     res.end('ok');
//     return next();
//   });
// });


server.del('/user/:id', function(req,res,next){
  // console.log('id to be deleted is: '+req.params.id);
  console.log('id to be deleted is: '+ db.ObjectId(req.params.id));

  db.Student.remove({'_id': db.ObjectId(req.params.id)},function(err,data){
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify(data));
    if(err) throw err;
  });
  return next();
});

server.del('/user', function(req,res,next){
  console.log('about to delete all documents are you sure about this? [y/n]');

  db.Student.remove({}, function(err,data){
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.end(JSON.stringify(data));
    if(err) throw err;
});
});

module.exports = 'app';
