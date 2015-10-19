var restify = require('restify');
var server = require('./app');
var prompt = require('prompt');

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

// a static product to CREATE READ UPDATE DELETE

// var testUser = {
//     name: 'Justin Regondola',
//     studentNumber: '09409234',
//     course: 'Computer Science',
//     yearLevel: 'IV',
//     address: 'Sitio di matapuan'
//
// };

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


client.post('/user', result, function (err, req, res, user) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('User saved >>>>>>>');
        console.log(user);
    }
});
});
