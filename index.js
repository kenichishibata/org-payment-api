#! /usr/bin/env node


// 'use strict'
// var restify, bunyan, routes, server, log, cfgManager, options;
//
// restify = require('restify');
// bunyan = require('bunyan');
// routes = require('./routes');
// cfgManager = require('node-config-manager');
//
// options = {
//   configDir   : './config',
//   env         : process.env.NODE_ENV || 'development',
//   camelCase   : true
// };
//
// cfgManager.init(options);
// cfgManager.addConfig('logger');
// cfgManager.addConfig('db');
//
// var loggerCfg = cfgManager.getConfig('logger');
//
// log = bunyan.createLogger({
//   name        :   'org-payment',
//   level       :   loggerCfg.logLevel,
//   stream      :   loggerCfg.streams,
//   serializers :   bunyan.stdSerializers
// });
//
// server = restify.createServer({
//   name    : 'org-payment',
//   log     :  log,
//   version :  '0.0.1'
// });
//
// server.use(restify.bodyParser({mapParams : false}));
// server.use(restify.gzipResponse());
// server.use(restify.queryParser());
// server.pre(restify.pre.sanitizePath());

/*jslint unparam:true*/
// server.on('uncaughtException', function (req, res, err) {
//   console.log('Error!');
//   console.log(err);
//   res.send(500, { success : false });
// });
/*jslint unparam:false*/
//
// server.on('after', restify.auditLogger({ log: log }));
// routes(server);
//
// console.log('Server started.');
// server.listen(8888, function () {
//   log.info('%s listening at %s', server.name, server.url);
// });
// console.log('org');
var start = require('./libs/app.js');
