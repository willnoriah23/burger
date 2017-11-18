var connection = require("../config/orm.js");
// Call the functions created in the orm.js in a variable
var burger = {
	all: function(cb) {
		orm.all("burger", function(res) {
			cb(res);
		});
	},
	create: function(col, vals, cb) {
		orm.create("burger", col, vals, function(res) {
			cb(res);
		});
	},
	update: function(col, vals, cb) {
		orm.update("burger", col, vals, function(res) {
			cb(res);
		});
	}
};
// Exporting to be utilized by the controller
module.exports = burger;


