var ObjectID = require('mongodb').ObjectID;
const LISTS_COLLECTION = 'Lists';
const USERS_COLLECTION = 'Users';

module.exports = {
  addList: async function (db, list) {
    const query = await db.collection(LISTS_COLLECTION).insertOne(list);
    return query.ops[0];
  },
  getList: async function (db, id) {
    const deatils = { _id: new ObjectID(id) };

    const query = await db.collection(LISTS_COLLECTION).findOne(deatils);
    return query;
  },
  getAllLists: async function (db) {
    const query = await db.collection(LISTS_COLLECTION).find({});
    return query.toArray();
  },
  updateList: async function (db, id, list) {
    const deatils = { _id: new ObjectID(id) };

    const query = await db.collection(LISTS_COLLECTION).updateOne(deatils, { $set: list });
    return query;
  },
  deleteList: async function (db, id) {
    const deatils = { _id: new ObjectID(id) };

    const query = await db.collection(LISTS_COLLECTION).deleteOne(deatils);
    return query;
  },
  getAllUsers: async function (db) {
    const query = await db.collection(USERS_COLLECTION).find({});
    return query.toArray();
  },
  addUser: async function (db, user) {
    const query = await db.collection(USERS_COLLECTION).insertOne(user);
    return query.ops[0];
  },
};
