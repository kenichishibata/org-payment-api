/* jshint node: true */

'use strict';
var restify, mongojs, configManager, loggerConfig, bunyan, prettify;
restify = require('restify');
mongojs = require('mongojs');
configManager = require('node-config-manager');
loggerConfig = configManager.getConfig('logger');
bunyan = require('bunyan');

prettify = require('bunyan-prettystream');
var pretty = new prettify();
pretty.pipe(process.stdout);

var log = bunyan.createLogger({
  name    : 'userService.js',
  level   : loggerConfig.logLevel,
  stream : pretty ,
  serializers : bunyan.stdSerializers
});

function creator(req){

  var name = req.params.name;
  var studentNumber = req.params.studentNumber;
  var course = req.params.course;
  var yearLevel = req.params.yearLevel;
  var address = req.params.address;
  var organizationalFee = req.params.organizationalFee;
  var contribution = req.params.contribution;
  var sportsFee = req.params.sportsFee;
  var partyFee = req.params.partyFee;
  var specialFee1 = req.params.specialFee1;
  var specialFee2 = req.params.specialFee2;
  var parameters = {"name":name,"studentNumber":studentNumber, "course":course,"yearLevel":yearLevel,"address":address,"organizationalFee":organizationalFee,"contribution":contribution,"sportsFee":sportsFee,"partyFee":partyFee,"specialFee1":specialFee1,"specialFee2":specialFee2};
  return parameters;
}

function headCreator(req){
  var name = req.params.name;
  var studentNumber = req.params.studentNumber;
  var course = req.params.course;
  var yearLevel = req.params.yearLevel;
  var address = req.params.address;
  var parameters = {"name":name,"studentNumber":studentNumber, "course":course,"yearLevel":yearLevel,"address":address};
  return parameters;
}

function bodyCreator(req){
  var organizationalFee = req.params.organizationalFee;
  var contribution = req.params.contribution;
  var sportsFee = req.params.sportsFee;
  var partyFee = req.params.partyFee;
  var specialFee1 = req.params.specialFee1;
  var specialFee2 = req.params.specialFee2;
  var parameters = {"organizationalFee":organizationalFee,"contribution":contribution,"sportsFee":sportsFee,"partyFee":partyFee,"specialFee1":specialFee1,"specialFee2":specialFee2};
  return parameters;
}

module.exports.creator = creator;
