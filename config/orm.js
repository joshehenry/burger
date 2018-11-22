var connection = require("./connection.js");

var mysql = require('mysql');


if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {


    connection = mysql.createConnection({

        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    })

};

var orm = {

    selectAll: function(cb) {

        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) {
                throw err;
            }


            return result;
        });
    },


    insertOne: function (burger_name, cb) {

        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false,

        }, function (err, result) {
            if (err) throw err;
           return result;
        });

    },


    updateOne: function (id, cb) {

        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: id }], function (err, result) {
            if (err) throw err;
            return result;
        });

    }

};


module.exports = orm;