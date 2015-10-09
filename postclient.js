var restify = require('restify');
var server = require('./app');


var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

// a static product to CREATE READ UPDATE DELETE

var testUser = {
    name: 'Justin Regondola',
    studentNumber: '09409234',
    course: 'Computer Science',
    yearLevel: 'IV',
    address: 'Sitio di matapuan'

};

client.post('/user', testUser, function (err, req, res, user) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('User saved >>>>>>>');
        console.log(user);
    }
});
