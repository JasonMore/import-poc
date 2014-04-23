var express = require('express'),
  routes = require('./routes');


var app;

exports.init = function(){
  app = express();

  routes.init(app);

  app.listen(process.env.PORT || 3000);
}