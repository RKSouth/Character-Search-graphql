const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  arenas: store.collection('arenas'),
  users: store.collection('users'),
  characters: store.collection('characters')
};
