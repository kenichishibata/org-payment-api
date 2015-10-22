var restify = require('restify');
var prompt = require('inquirer');
var courses = ["Computer Science","Chemistry","Biology","Information Technology"];
var yearLevels = ["I","II","III","IV"];

var mongojs = require ('mongojs');
var ObjectId = mongojs.ObjectId;

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});
var testUser = {};
testUser._id = process.argv[2];

if(!testUser._id){
  console.log('error please add the database Id {program: exiting 1}');
  process.exit(1);
}

client.get('/user/'+testUser._id, function (err, req, res, user) {
	    console.log(user);

var schema = [

      {
        type: "input",
        name: "name",
        validate: function(value){
          var pass = value.match(/^[a-zA-Z\s\-]+$/);
          if(pass) return true;
          else return 'studentNumber must only be number string';
        },
        message: 'Full Name',
        default: user.name
      },
      {
        type: "input",
        name: "studentNumber",
        validate: function(value){
          var pass = value.match(/[0-9]+/);
          if(pass) return true;
          else return 'studentNumber must only be number string';
        },
        message: 'Student Number:',
        default: user.studentNumber
      },
      {
        type: "list",
        name: "course",
        message: 'Course: ',
        choices: courses,
        default: user.course

      },
      {
        type: "list",
        name: "yearLevel",
        message: "Year Level: ",
        choices: yearLevels,
        default: user.yearLevel
      },
      {
        type: "input",
        name: "address",
        message: "Address: ",
        default: user.address
      }
      // ,
      // {
      //   type: "input",
      //   name: "organizationalFee",
      //   message: "organizationalFee: ",
      //   default: user.organizationalFee
      // },
      // {
      //   type: "input",
      //   name: "contribution",
      //   message: "contribution: ",
      //   default: user.contribution
      // },
      // {
      //   type: "input",
      //   name: "sportsFee",
      //   message: "sportsFee: ",
      //   default: user.sportsFee
      // },
      // {
      //   type: "input",
      //   name: "partyFee",
      //   message: "partyFee: ",
      //   default: user.partyFee
      // },
      // {
      //   type: "input",
      //   name: "specialFee1",
      //   message: "specialFee1: ",
      //   default: user.specialFee1
      // },
      // {
      //   type: "input",
      //   name: "specialFee2",
      //   message: "specialFee2: ",
      //   default: user.specialFee2
      // }

  ];

  prompt.prompt(schema, function (result) {
    console.log("\nStudent updated:");
    if (err){ throw err; console.log('error occured exiting'); process.exit(1);}

 client.put('/user/'+testUser._id, result , function (err, req, res, status) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('id : '+testUser._id);
        console.log('User updated >>>>>>>');
        console.log(status);
    }
});
});
});
