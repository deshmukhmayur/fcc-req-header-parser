var path = require('path');
var express = require('express');
var env = require('node-env-file');

var app = express();

env(__dirname + '/.env');

// enabling trusted proxy for ip address
app.enable('trust proxy');

// to prettify JSON output
app.set('json spaces', 40);


// routes
app.get('/', function(req, res) {
  // console.log(req.connection);
  res.json({
    'ipaddress': req.ip,
    'language': req.headers['accept-language'].split(',')[0],
    'software': req.headers['user-agent'].match(/\((.)*?\)/)[0].slice(1,-1)
  });
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});