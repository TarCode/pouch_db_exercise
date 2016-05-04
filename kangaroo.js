var PouchDB = require('pouchdb');

//********  create a local database  *************************
var localDb = new PouchDB('kangaroos');
//query local db info
localDb.info().then(function(info) {
  console.log('Local DB info', info);
});
//create new document (kangaroo)
var doc = {
            _id: '1',
            name: 'Paralocks',
            style: 'hitech'
          }

//insert doc into local db
localDb.put(doc);

//get doc from local db
localDb.get('1').then(function(doc) {
  console.log('local kangaroo', doc);
});

//************************************************************

//********  create remote database  **************************
var remoteDb = new PouchDB('http://localhost:5984/kangaroos');
//query remote db info
remoteDb.info().then(function(info) {
  console.log('Remote DB info', info);
});
//create new document (kangaroo)
var doc2 = {
              _id: '1',
              name: 'Fobi',
              style: 'darkpsy'
           }
remoteDb.put(doc2);

//get doc from remote db
remoteDb.get('1').then(function(doc) {
  console.log('remote kangaroo', doc);
});
//************************************************************

//Replicate from local to remote
localDb.sync(remoteDb).on('complete', function () {
  console.log('Replication Complete');
}).on('error', function (err) {
  console.log('Replication Error', err);
});
