#! /usr/bin/env node
var restify = require('restify');
var prompt = require('inquirer');
var courses = ["Computer Science","Chemistry","Biology","Information Technology"];
var yearLevels = ["I","II","III","IV"];

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

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

      },
      {
        type: "list",
        name: "course",
        message: 'Course: ',
        choices: courses

      },
      {
        type: "list",
        name: "yearLevel",
        message: "Year Level: ",
        choices: yearLevels
      },
      {
        type: "input",
        name: "address",
        message: "Address: "
      },
      {
        type: "input",
        name: "organizationalFee",
        message: "organizationalFee: ",
        default: 'not paid'
      },
      {
        type: "input",
        name: "contribution",
        message: "contribution: ",
        default: 'not paid'
      },
      {
        type: "input",
        name: "sportsFee",
        message: "sportsFee: ",
        default: 'not paid'
      },
      {
        type: "input",
        name: "partyFee",
        message: "partyFee: ",
        default: 'not paid'
      },
      {
        type: "input",
        name: "specialFee1",
        message: "specialFee1: ",
        default: 'not paid'
      },
      {
        type: "input",
        name: "specialFee2",
        message: "specialFee2: ",
        default: 'not paid'
      }

  ];

prompt.prompt( schema, function(result) {
  console.log("\nStudent receipt:");
  // console.log( JSON.stringify(result, null, "  ") );
// });

client.post('/user', result, function (err, req, res, user) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('User saved >>>>>>>');
        console.log(user);
    }
});
});
