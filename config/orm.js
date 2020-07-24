// Most of the code for this file was learned in 13-MVC, Activity 17-CatsApp, Solved, orm.js
// Import MySQL connection
const connection = require("../config/connection");

// Function to make spaces to be used in addBurger function
// Makes a new space in the table for each object added
function makeSpaces(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// Function to convert object key/value pairs to SQL syntax
function translateSql(ob) {
	let arr = [];
	for (var key in ob) {
		const value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

const orm = {
	selectAll: function (table, cb) {
		let queryString = "SELECT * FROM " + table + ";";

		connection.query(queryString, function (err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	addBurger: function (table, cols, vals, cb) {
		let queryString =
			"INSERT INTO " + table + " (" + cols.toString() +
			") " + "VALUES (" + makeSpaces(vals.length) + ") ";

		console.log(queryString);

		connection.query(queryString, vals, function (err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	updateBurger: function (table, objColVals, condition, cb) {
		let queryString = "UPDATE " + table + " SET " +
			translateSql(objColVals) + " WHERE " + condition;

		console.log(queryString);

		connection.query(queryString, function (err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	// deleteBurger: function(table, condition, cb) {
	//   let queryString = "DELETE FROM " + table + " WHERE " + condition;
	//   console.log(queryString);

	//   connection.query(queryString, function(err, res) {
	//     if (err) {
	//       throw err;
	//     }
	//     cb(res);
	//   });
	// }
};
module.exports = orm;
