const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 3001;

app.listen(port, function() {
  console.log('Listening on', port);
})

app.get('/lists', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Sending lists... with restarting server');
})

app.post('/list', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Adding a new list');
})