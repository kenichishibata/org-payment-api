#! /usr/bin/env node

var restify = require('restify');
var p = require('prettyjson');
var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});



client.get('/user', function (err, req, res, user) {
	if (err) {
	    console.log("An error ocurred >>>>>>");
	    console.log(err);
	} else {
	    console.log("Total users " + user.length);
	    console.log('All users >>>>>>>');
	    p.render(console.log(JSON.stringify(user)));
	}
});

