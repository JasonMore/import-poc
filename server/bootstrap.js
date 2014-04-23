var express = require('express'),
  routes = require('./routes');


var app;

exports.init = function(){
  app = express();

  routes.init(app);

  app.listen(3000);
}