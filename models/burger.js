// Most of the code for this file was learned in 13-MVC, Activity 17-CatsApp, Solved, cat.js
const orm = require("../config/orm.js");
const burger = {
	selectAllBurgers: function (cb) {
		orm.selectAllBurgers("burgers", function (res) {
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
};

// Exports the code to be used in burgers_controller.js
module.exports = burger;
