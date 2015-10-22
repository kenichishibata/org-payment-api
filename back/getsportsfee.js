var restify = require('restify');
var mongojs = require ('mongojs');
var ObjectId = mongojs.ObjectId;

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

var testUser = {};
var testUser={id : ObjectId(process.argv[2])};

client.get('/user/'+testUser.id+'/sportsFee', function (err, req, res, status) {
    if (err) {
        console.log(err);
    }
    else {
      console.log(status.sportsFee);
      return status.sportsFee;
    }
});
