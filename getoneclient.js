var restify = require('restify');
var server = require('./app');

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

var testUser = {"_id": process.argv[2]};

client.get('/user/'+testUser._id, function (err, req, res, user) {
	if (err) {
	    console.log("An error ocurred >>>>>>");
	    console.log(err);
	} else {
	    // console.log("Total users " + user.length);
	    console.log('User >>>>>>>'+testUser._id);
	    console.log(user);
	}
});
