var restify = require('restify');
var server = require('./app');
var mongojs = require ('mongojs');
var ObjectId = mongojs.ObjectId;
var prompt = require('prompt');

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

// var testUser = {
//     "name" : "procopio magalpok",
//     "yearLevel" : "IX"
// };
var testUser = {};
var schema = {
  properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      studentNumber: {
        pattern: /[0-9]+/,
        message: 'studentNumber must only be number string',
        required: true
      },
      course: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'course must be only letters, spaces, or dashes',
        required: true
      },
      yearLevel: {
        required: true
      },
      address: {
        required: false
      }
    }
  };

  prompt.start();

  prompt.get(schema, function (err, result) {
    if (err) throw err;
    console.log(' name: '+result.name);
    console.log(' address: '+result.address);



testUser._id = process.argv[2];
 client.put('/user/'+testUser._id, result , function (err, req, res, status) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('id : '+testUser._id);
        console.log('User updated >>>>>>>');
        console.log(status);
    }
});
});
