require('dotenv').config()

var app = require('./app');
var port = process.env.PORT;

var server = app.listen(port, '0.0.0.0', function() {
  console.log('Express server listening on port ' + port);
});