var restify = require('restify');
var server = require('./app');
var mongojs = require ('mongojs');
var ObjectId = mongojs.ObjectId;

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

var testUser = {
  // $set:
  // {
    "name" : "procopio magalpok",
    "yearLevel" : "IX"
  // }
};
// console.log(process.argv[2]);
testUser._id = process.argv[2];
// console.log('----');
// console.log(testUser._id);
 client.put('/user/'+testUser._id, testUser , function (err, req, res, status) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('id : '+testUser._id);
        console.log('User updated >>>>>>>');
        console.log(status);
    }
});
