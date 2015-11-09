var controller = require('./../controllers/org-controller.js');
var restify = require('restify');

module.exports = function(server){

server.get('/user',controller.getAllData);
server.get('/user/:name',controller.getByNameData);
server.get('/user/search/:name',controller.search);
server.post('/user',controller.postData);
server.del('/user',controller.delAllData);
server.del('/user/:name',controller.delData);
};
