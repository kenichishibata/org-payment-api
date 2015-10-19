var restify = require('restify');
var server = require('./app');

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});



client.del('/user', function (err, req, res, user) {
	if (err) {
	    console.log("An error ocurred >>>>>>");
	    console.log(err);
	} else {
	    console.log("deleted all users ");
	    console.log(user);
	}
});
