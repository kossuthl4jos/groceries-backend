const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 3001;

require('./app/routes')(app, {});

app.listen(port, function() {
  console.log('Listening on', port);
})
