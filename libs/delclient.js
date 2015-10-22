#! /usr/bin/env node

var restify = require('restify');
var mongojs = require ('mongojs');
var ObjectId = mongojs.ObjectId;

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

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
