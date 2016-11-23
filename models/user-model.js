// Type 2: Persistent datastore with manual loading
var Datastore = require('nedb')
  , db = {};

db.users = new Datastore({ filename: './users.json' });
db.flexi = new Datastore({ filename: './flexi.json'});

db.users.loadDatabase(function (err) {    // Callback is optional
	// Now commands will be executed
	console.log("Users database loaded", err);
});

var UserModel = (function() {

	function createUser(data, callback) {
		db.users.insert({userName : data[0], password: data[1]}, function (err, newDocs) {
			console.log("Insert Error :", err, newDocs);
			callback(newDocs);
		});
	}

	function getUser(callback) {
		// Find all documents in the collection
		db.users.find({}, function (err, docs) {
			callback(docs);
		});
	}

    function deleteUser(id, callback) {
        db.users.remove({ _id: id }, {}, function (err, numRemoved) {
            // numRemoved = 1
            callback(numRemoved);
        });
    }

	return {
		createUser: createUser,
		getUser: getUser,
        deleteUser: deleteUser
	}
})();

module.exports = UserModel;
