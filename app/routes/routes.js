var dbApi = require('../data-base/db-api');

module.exports = function (app, db) {
  app.post('/list', async (req, res) => {
    const list = { name: req.body.name, items: req.body.items };

    try {
      const document = await dbApi.addList(db, list);
      res.send(document);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  app.get('/list/:id', async function (req, res) {
    const id = req.params.id;

    try {
      const document = await dbApi.getList(db, id);
      res.send(document);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  app.get('/list', async function (req, res) {
    try {
      const documents = await dbApi.getAllLists(db);
      res.send(documents);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  app.put('/list/:id', async function (req, res) {
    const id = req.params.id;
    const list = { name: req.body.name, items: req.body.items };

    try {
      const documents = await dbApi.updateList(db, id, list);
      res.send(documents);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  app.delete('/list/:id', async function (req, res) {
    const id = req.params.id;

    try {
      const documents = await dbApi.deleteList(db, id);
      res.send(documents);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
};
