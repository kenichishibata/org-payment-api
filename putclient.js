var restify = require('restify');
var server = require('./app');

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

var testUser = {
    _id: '561618d67599b2e6241cb5d6',
    name: 'Justin Regondola bekla',
    // // name : "Justin Regondola Bading",
    studentNumber: '09409234',
    course: 'Computer Science',
    yearLevel: 'IV',
    address: 'Sitio di matapuan'
};

 testUser.yearLevel = "VII",
 client.put('/user/' + testUser.id,testUser, function (err, req, res, status) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('id : '+testUser.id);
        console.log('User updated >>>>>>>');
        console.log(status);
    }

});
