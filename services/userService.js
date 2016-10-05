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

function creator(req){
	var parameters = {
		user: headCreator(req),
		payment: bodyCreator(req)
	}
  return parameters;
}

function headCreator(req){
	var parameters = {
		name: req.params.name,
		studentNumber: req.params.studentNumber,
		course: req.params.course,
		yearLevel: req.params.yearLevel,
		address: req.params.address
	}
  return parameters;
}

function bodyCreator(req){
	var parameters = {
	  organizationalFee: req.params.organizationalFee,
	  contribution: req.params.contribution,
	  sportsFee: req.params.sportsFee,
	  partyFee: req.params.partyFee,
	  specialFee1: req.params.specialFee1,
	  specialFee2: req.params.specialFee2
	}
  return parameters;
}

module.exports.creator = creator;
