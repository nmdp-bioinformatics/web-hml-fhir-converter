var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    port = process.env.PORT || 8080,
    staticDir = process.env.NODE_ENV === 'production' ? 'dist.prod' : 'dist.dev';

app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/' + staticDir));

require('./devServer/routes')(app);

app.listen(port);

console.log('Starting server on port: ' + port);

exports = module.exports = app;