var ObjectID = require('mongodb').ObjectID;
var dbApi = require('../data-base/db-api');

module.exports = function (app, db) {
  app.post('/list', (req, res) => {
    console.log(req.body);
    const list = { name: req.body.name, items: req.body.items };

    db.collection('testCol').insertOne(list, (err, result) => {
      if (err) {
        console.log(err);
        res.send({ error: 'An error has occured' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/list/:id', function (req, res) {
    const id = req.params.id;
    const deatils = { _id: new ObjectID(id) };

    db.collection('testCol').findOne(deatils, (err, item) => {
      if (err) {
        console.log(err);
        res.send({ error: 'An error has occured' });
      } else {
        res.send(item);
      }
    });
  });

  app.get('/list', async function (req, res) {
    try {
      const documents = await dbApi.getAllLists(db);
      res.send(documents);
    } catch (error) {
      // or something along those lines
      res.status(500).send({ error: error.message });
    }
  });

  app.put('/list/:id', function (req, res) {
    const id = req.params.id;
    const deatils = { _id: new ObjectID(id) };
    const list = { name: req.body.name, items: req.body.items };

    db.collection('testCol').updateOne(deatils, list, (err, item) => {
      if (err) {
        console.log(err);
        res.send({ error: 'An error has occured' });
      } else {
        res.send(item);
      }
    });
  });

  app.delete('/list/:id', function (req, res) {
    const id = req.params.id;
    const deatils = { _id: new ObjectID(id) };

    db.collection('testCol').deleteOne(deatils, (err, item) => {
      if (err) {
        console.log(err);
        res.send({ error: 'An error has occured' });
      } else {
        res.send('List ' + id + ' deleted!');
      }
    });
  });
};
