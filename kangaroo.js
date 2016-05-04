var PouchDB = require('pouchdb');

//********  create a local database  *************************
var localDb = new PouchDB('kangaroos');
//query db info
localDb.info().then(function(info) {
  console.log('Local DB info', info);
})
//************************************************************

//********  create remote database  **************************
var remoteDb = new PouchDB('http://localhost:5984/kangaroos');

remoteDb.info().then(function(info) {
  console.log('Remote DB info', info);
});
//************************************************************
