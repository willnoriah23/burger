var connection = require("../config/orm.js");
// Call the functions created in the orm.js in a variable

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burger", function(res) {
			cb(res);
		});
	},
	insertOne: function(col, vals, cb) {
		orm.insertOne("burger", col, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(col, vals, cb) {
		orm.updateOne("burger", col, vals, function(res) {
			cb(res);
		});
	}
};
// Exporting to be utilized by the controller
module.exports = burger;


