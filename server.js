const express = require('express');
var cors = require('cors');
require('dotenv').config();

const app = express();

const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const credentials = fs.readFileSync(process.env.MONGODB_CERTIFICATE_PATH);
const client = new MongoClient(process.env.MONGODB_URI, {
  sslKey: credentials,
  sslCert: credentials,
  useUnifiedTopology: true,
});
async function run() {
  try {
    await client.connect();
    const database = client.db('testDB');
    const listCollection = database.collection('testCol');
    const userCollection = database.collection('Users');

    require('./app/routes')(app, database);
    app.listen(port, function () {
      console.log('Listening on', port);
    });

    const listDocCount = await listCollection.countDocuments({});
    const userDocCount = await userCollection.countDocuments({});
    console.log('Current number of documents in lists: ', listDocCount);
    console.log('Current number of documents in users: ', userDocCount);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
