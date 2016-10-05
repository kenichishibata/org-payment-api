/* jshint node: true */

'use strict';
var configManager, loggerConfig, bunyan, prettify;
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

function headCreator(req){
	var parameters = {
		name: req.query.name,
		studentNumber: req.query.studentNumber,
		course: req.query.course,
		yearLevel: req.query.yearLevel,
		address: req.query.address
	}
  return parameters;
}

function bodyCreator(req){
	var parameters = {
	  organizationalFee: req.query.organizationalFee,
	  contribution: req.query.contribution,
	  sportsFee: req.query.sportsFee,
	  partyFee: req.query.partyFee,
	  specialFee1: req.query.specialFee1,
	  specialFee2: req.query.specialFee2
	}
  return parameters;
}

function creator(req){
	var parameters = {
		user: headCreator(req),
		payment: bodyCreator(req)
	}
  return parameters;
}



module.exports.creator = creator;
