const express = require('express');
const app = express();

app.listen(3001, function() {
  console.log('Listening on 3001...')
})

app.get('/lists', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Sending lists...');
})