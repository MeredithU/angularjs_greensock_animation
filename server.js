'use strict';

var express = require('express');
var http = require('http');

var app = express();
app.use(express.static( __dirname + '/app'));
app.set('port', process.env.PORT || 8000);

app.listen(8000);