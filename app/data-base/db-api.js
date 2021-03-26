module.exports = {
  addList: function (db) {},
  getList: function (db) {},
  getAllLists: function (db) {
    const query = db.collection('testCol').find({});
    return query.toArray();
  },
  updateList: function (db) {},
  deleteList: function (db) {},
};
