import { ObjectID } from 'mongodb';
const LISTS_COLLECTION = 'Lists';
const USERS_COLLECTION = 'Users';

export async function addList(db, list) {
  const query = await db.collection(LISTS_COLLECTION).insertOne(list);
  return query.ops[0];
}
export async function getList(db, id) {
  const deatils = { _id: new ObjectID(id) };

  const query = await db.collection(LISTS_COLLECTION).findOne(deatils);
  return query;
}
export async function getAllLists(db) {
  const query = await db.collection(LISTS_COLLECTION).find({});
  return query.toArray();
}
export async function updateList(db, id, list) {
  const deatils = { _id: new ObjectID(id) };

  const query = await db.collection(LISTS_COLLECTION).updateOne(deatils, { $set: list });
  return query;
}
export async function deleteList(db, id) {
  const deatils = { _id: new ObjectID(id) };

  const query = await db.collection(LISTS_COLLECTION).deleteOne(deatils);
  return query;
}
export async function getAllUsers(db) {
  const query = await db.collection(USERS_COLLECTION).find({});
  return query.toArray();
}
export async function addUser(db, user) {
  const query = await db.collection(USERS_COLLECTION).insertOne(user);
  return query.ops[0];
}
