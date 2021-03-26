var ObjectID = require('mongodb').ObjectID;

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

  app.get('/list', function (req, res) {
    db.collection('testCol')
      .find({})
      .toArray(function (err, lists) {
        if (err) {
          console.log(err);
          res.send({ error: 'An error has occured' });
        } else {
          res.send(lists);
        }
      });
  });
};
