/*jslint node: true*/
'use strict';
var mongojs, configManager, dbConfig, loggerConfig, bunyan, prettify, data, paramGod;
mongojs           = require('mongojs');
configManager     = require('node-config-manager');
dbConfig          = configManager.getConfig('db');
loggerConfig      = configManager.getConfig('logger');
bunyan            = require('bunyan');
data              = require('./../services/mongodb.js');
paramGod          = require('./../services/userService.js');
prettify          = require('bunyan-prettystream');
var pretty        = new prettify();

pretty.pipe(process.stdout);

var log         = bunyan.createLogger({
  name          : 'org-controller.js',
  level         : loggerConfig.logLevel,
  stream        : pretty ,
  serializers   : bunyan.stdSerializers
});

function getAllData (req,res,next){
  data.getAll(req,res);
  return next();
}

function postData (req,res,next){
  var parameters = paramGod.creator(req);
  console.log(parameters);
  data.addToTable(req,res,parameters);
}
//
 function getByNameData(req,res,next){
   var name = req.params.name;
   data.getByName(req,res,name);
 }
 // function getByIdData(req,res,next){
 //
 // }

 function delData (req,res,next){
   var name = req.params.name;
   data.delOneFromTable(req,res,name);
 }

 function delAllData(req,res,next){
   data.delAllFromTable(res,res);
 }

 function search (req,res,next){
   var paramName = req.params.name;
   console.log(paramName  +' = paramName');
   data.searchByName(req,res,paramName);

 }

 function update (req,res,next){
   var paramName = req.params.name;
   console.log(paramName + '= update this name');
   data.putTable(req,res,paramName);
 }

module.exports.getAllData = getAllData;
module.exports.postData = postData;
module.exports.getByNameData = getByNameData;
module.exports.delAllData = delAllData;
module.exports.delData = delData;
module.exports.search = search;
module.exports.update = update;
