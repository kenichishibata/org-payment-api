#! /usr/bin/env node

var restify = require('restify');
var mongojs = require('mongojs');
var dbase = 'mongodb://localhost/org-payment';
var collection = ['Student'];

db = mongojs(dbase,collection);

db.on('error', function (err) {
    console.log('database error', err)
})

db.on('connect', function () {
    console.log('database connected')
})

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
    console.log('Starting directory: ' + process.cwd());
    try {
      process.chdir('/users/00831103/workspace/self-project-3');
      console.log('New directory: ' + process.cwd());

      console.log('watching');
    }
    catch (err) {
      console.log('chdir: ' + err);
}


});
// get
server.get('/user',function (req,res,next) {
  db.Student.find(function (err, Student) {
    // if (err){
    //   console.log('error'+err);
    //   throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(Student));
    // }
    });
    return next();
});

server.get('/user/:id',function (req,res,next) {
    db.Student.findOne({_id: db.ObjectId(req.params.id)}, function(err, data) {
      if (err) throw err;
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.end(JSON.stringify(data));
    });
    return next();
});
// post
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
// put
server.put("/user/:id", function(req, res, next) {
    db.Student.findOne({
        _id: db.ObjectId(req.params.id)
    }, function(err, data) {
        //merge req.params/product with the server/product

        var updProd = {};
        for(var n in data) {

            updProd[n] = data[n];
        }
        for(var m in req.params) {
            updProd[m] = req.params[m];
        }
        delete updProd._id;
        db.Student.update({_id: db.ObjectId(req.params.id)}, updProd, {multi: false}, function(err, data) {
            res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
            res.end(JSON.stringify(updProd));
        });
    });
    return next();
});
// delete
server.del('/user/:id', function(req,res,next){
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
      db.Student.remove({}, function(err,data){
      res.setHeader('Content-Type', 'application/json');
      res.status(200);
      res.end(JSON.stringify(data));
      if(err) throw err;
});
});


// get one field for one item for the id
server.get('/user/:id/name', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'name':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/studentNumber', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'studentNumber':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/course', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'course':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/yearLevel', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'yearLevel':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/address', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'address':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/organizationalFee', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'organizationalFee':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/contribution', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'contribution':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/sportsFee', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'sportsFee':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/partyFee', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'partyFee':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/specialFee1', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'specialFee1':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/:id/specialFee2', function(req,res,next){
  db.Student.findOne({_id: db.ObjectId(req.params.id)},{_id:0, 'specialFee2':1}, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
});

server.get('/user/search/:name',function (req,res,next) {
    // var paramName = '/'+req.params.name+'/i';
    var paramName = req.params.name;
    console.log(paramName  +' = paramName');

    db.Student.find({name: {$regex : paramName} }, function(err, data) {
      if (err) throw err;
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.end(JSON.stringify(data));
    });
    return next();
});

//end
