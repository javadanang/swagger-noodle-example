'use strict';

var http = require('http');
var path = require('path');

var express = require("express");
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

var swagger = require('swagger-noodle')({
  API_SPEC_FILE: __dirname + '/api/swagger.json',
  CONTROLLERS_DIR: __dirname + '/controllers',
  MOCK_MODE: true
});
app.use(swagger);

http.createServer(app).listen(8080, function () {
  console.log('Swagger-ui is available on http://localhost:%d/docs', 8080);
});
