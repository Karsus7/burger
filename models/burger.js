const orm = require("../config/orm.js");
const burger = {
	selectAll: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},

	addBurger: function (cols, vals, cb) {
		orm.addBurger("burgers", cols, vals, function (res) {
			cb(res);
		});
	},

	updateBurger: function (objColVals, condition, cb) {
		orm.updateBurger("burgers", objColVals, condition, function (res) {
			cb(res);
		});
	},

	// deleteBurger: function(condition, cb) {
	//   orm.deleteBurger("burgers", condition, function(res) {
	//     cb(res);
	//   });
	// }
};

module.exports = burger;
