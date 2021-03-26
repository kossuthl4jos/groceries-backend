module.exports = function (app, db) {
  app.post('/lists', (req, res)=> {
    // create lists here
    res.send('Creating lists...');
  })

  app.get('/lists', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Fetching lists... ');
  })

}