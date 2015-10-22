#! /usr/bin/env node

var restify = require('restify');
var confirm = require('yesno');
var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

confirm.ask('Are you sure you want to delete everything here?[y/n]', true, function(ok){
  if(ok){
    client.del('/user', function (err, req, res, user) {
    	if (err) {
    	    console.log("An error ocurred >>>>>>");
    	    console.log(err);
    	} else {
    	    console.log("deleted all users ");
    	    console.log(user);
            process.exit();
    	}
    });

}
});
