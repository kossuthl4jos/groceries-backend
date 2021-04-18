var dbApi = require('../data-base/db-api');

module.exports = function (app, db) {
  app.get('/list', async function (req, res) {
    try {
      const documents = await dbApi.getAllLists(db);
      res.send(documents);
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

  app.post('/list', async (req, res) => {
    const list = { name: req.body.name, items: req.body.items };

    try {
      const document = await dbApi.addList(db, list);
      res.send(document);
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

  app.post('/login', async function (req, res) {
    const user = { name: req.body.userName, password: req.body.password };
    try {
      const documents = await dbApi.getAllUsers(db);

      documents.forEach((document) => {
        if (document.name === user.name && document.password === user.password) {
          console.log('All set, match found');
          res.status(200).send({ _id: document._id });
        }
      });

      if (res.finished === false) {
        res.status(404).send({ error: 'User was not found' });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  app.post('/signup', async function (req, res) {
    const user = { name: req.body.userName, password: req.body.password };

    try {
      const documents = await dbApi.getAllUsers(db);
      if (documents.find((d) => d.name === user.name) == null) {
        const document = await addUser(db, user);
        res.send(document);
      } else {
        throw new Error('User already exists');
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
};
