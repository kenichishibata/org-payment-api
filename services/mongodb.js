/* jshint node: true */

'use strict';
var mongojs, configManager, dbConfig, loggerConfig, bunyan, prettify, pretty, dbCol;
mongojs          = require('mongojs');
configManager    = require('node-config-manager');
dbConfig         = configManager.getConfig('db');
dbCol            = configManager.getConfig('dbCol')
loggerConfig     = configManager.getConfig('logger');
bunyan           = require('bunyan');
prettify         = require('bunyan-prettystream');
pretty           = new prettify();

pretty.pipe(process.stdout);

var log = bunyan.createLogger({
  name        : 'mongodb.js',
  level       : loggerConfig.logLevel,
  stream      : pretty ,
  serializers : bunyan.stdSerializers
});


var credentials = {
  database    : dbConfig.database,
  collection  : dbConfig.collection,
};

 var db = mongojs(dbConfig.database,['Student']);

function getAll(req,res){
  db.Student.find(function (err, data) {
    db.Student.count({},function(err,count){
    if(err){
	    log.error('400'+err);
	    return err;
    }
    else{
	    log.info('200');
	    res.setHeader('Content-Type','application/json');
	    res.status(200);
	    console.log(count);
	    data.unshift({count: count});
	    var countData = JSON.stringify(data);
	    res.end(countData);
	    return data;
    }
     });
  });
}

function getByName(req,res,name){
  db.Student.find({name : name}).limit(2).skip(0, function(err, docs){
    if(err)
    {
      log.error('400'+err);
      return err;
    }
    else{
      log.info('200')
      res.setHeader('Content-Type','application/json');
      res.status(200);
      res.end(JSON.stringify(docs));
      return docs;
    }
  });

}

function addToTable(req,res,fs){
    db.Student.insert(fs, function(err,data){
      if(err){
	      log.error('400'+err);
	      return err;
      }
      else{
	      log.info('200');
	      res.setHeader('Content-Type','application/json');
	      res.status(200);
	      res.end(JSON.stringify(data));
	      return data;
      }
    });
}

function delAllFromTable(req,res){
  db.Student.remove({}, function(err,data){
    if(err){
	    log.error('400'+err);
	    return err;
    }
    else{
      log.info('200');
      res.setHeader('Content-Type','application/text');
      res.status(200);
      res.end('{All data deleted}');
      return data;
    }
  });
}

function delOneFromTable(req,res,name){
  db.Student.remove({name : name}, true, function(err,data){
    if(err){
	    log.error('400'+err);
	    return err;
    }
    else{
      log.info('200');
      res.setHeader('Content-Type','application/name');
      res.status(200);
      res.end('deleted'+name);
      return data;
    }
  });
}

function putTable(req,res,name){
  db.Student.findOne({
      name: name
  }, function(err, data) {
      //merge req.params/product with the server/product

      var updProd = {};
      for(var n in data) {
          if(n==5)
          break;
          updProd[n] = data[n];
      }
      for(var m in req.params) {
          if(m==5)
          break;
          updProd[m] = req.params[m];
      }
      delete updProd._id;
      db.Student.update({name: name}, updProd, {multi: false}, function(err, data) {
          res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
          res.end(JSON.stringify(updProd));
      });
    });
}
//
// function putToTableBody(){
//
// }
//
function searchByName(req,res,paramName){
  db.Student.find({name: {$regex : paramName} }, function(err, data) {
    if (err) throw err;
    res.setHeader('Content-Type','application/json');
    res.status(200);
    res.end(JSON.stringify(data));
  });
}

module.exports.getAll = getAll;
module.exports.addToTable = addToTable;
module.exports.getByName = getByName;
module.exports.delAllFromTable = delAllFromTable;
module.exports.delOneFromTable = delOneFromTable;
module.exports.searchByName = searchByName;
module.exports.putTable = putTable;
