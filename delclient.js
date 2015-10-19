var restify = require('restify');
var server = require('./app');
var mongojs = require ('mongojs');
var ObjectId = mongojs.ObjectId;

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

// a static product to CREATE READ UPDATE DELETE
//
// var testUser = {
//     name: 'Justin Regondola',
//     studentNumber: '09409234',
//     course: 'Computer Science',
//     yearLevel: 'IV',
//     address: 'Sitio di matapuan'
//
// };


// var testUser={_id : process.argv[2]};
// console.log(testUser._id

var testUser={id : ObjectId(process.argv[2])};

client.del('/user/'+ testUser.id, function (err, req, res, user) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('User deleted >>>>>>>'+testUser.id);
        console.log(user);
    }
});
