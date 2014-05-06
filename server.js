var express = require('express'),
    routes = require('./server/routes'),
    app = express();

app.use(express.static(__dirname + '/public'));

routes.init(app);

app.listen(process.env.PORT || 3000);