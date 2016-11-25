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
            if (err !== null) {
				callback({ ok: false, message: 'error while deleting user.', error : err });
			}
			else {
                callback(numRemoved);
            }
        });
    }

	function viewUserDetail(id, callback) {
        db.users.find({ _id: id }, function (err, docs) {
            if (err !== null) {
				callback({ ok: false, message: 'error while getting user detail', error : err });
			}
			else {
                callback(docs);
            }
        });
    }

	return {
		createUser: createUser,
		getUser: getUser,
        deleteUser: deleteUser,
		viewUserDetail: viewUserDetail
	}
})();

module.exports = UserModel;
