exports.userModel = function() {

var db = require('mongoose');

db = mongoose.connect('mongodb://localhost/org-payment', function(err){if(err) throw err;});
var Schema = mongoose.Schema;
var Student = new Schema({
 fname: String,
 studentNumber: String,
 course: String,
 yearLevel: String,
 address: String
});
var User = mongoose.model('User', Student);

};
