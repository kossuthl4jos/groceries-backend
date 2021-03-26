module.exports = function (app, db) {
  app.post('/lists', (req, res)=> {
    console.log(req.body);
    res.send('Creating lists...');
  })

  app.get('/lists', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Fetching lists... ');
  })

}