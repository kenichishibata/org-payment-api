#! /usr/bin/env node

'use strict';
var restify, bunyan, routes, server, log, cfgManager, options, prettify;

restify = require('restify');
bunyan = require('bunyan');
routes = require('./routes');
cfgManager = require('node-config-manager');

prettify = require('bunyan-prettystream');
var pretty = new prettify();
pretty.pipe(process.stdout);

options = {
  configDir   : './config',
  env         : process.env.NODE_ENV || 'development',
  camelCase   : true
};

cfgManager.init(options);
cfgManager.addConfig('logger');
cfgManager.addConfig('db');
cfgManager.addConfig('dbCol')

var loggerCfg = cfgManager.getConfig('logger');

log = bunyan.createLogger({
  name        :   'org-payment',
  level       :   loggerCfg.logLevel,
  stream      :   pretty,
  serializers :   bunyan.stdSerializers
});

server = restify.createServer({
  name    : 'org-payment',
  log     :  log
});

server.use(restify.fullResponse());
server.use(restify.CORS());
server.use(restify.bodyParser({mapParams : false}));
server.use(restify.gzipResponse());
server.use(restify.queryParser());
server.pre(restify.pre.sanitizePath());


log.info('enabling CORS');

server.on('after', restify.auditLogger({ log: log }));
routes(server);

server.on('uncaughtException', function (req, res, route, err) {
    console.log('uncaughtException', err.stack);
});

console.log('Server started.');
server.listen(3000, function () {
  log.info('%s listening at %s', server.name, server.url);
});
// var start = require('./libs/app.js');
