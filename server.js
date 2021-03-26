const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const port = 3001;

app.use(express.urlencoded({ extended: true}));

require('./app/routes')(app, {});

app.listen(port, function() {
  console.log('Listening on', port);
})
