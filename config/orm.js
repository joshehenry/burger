require("./connection.js");

var orm = {

    selectAll: function (tableInput, cb) {

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }


            cb(result);
        });
    },


    insertOne: function (table, vals, cb) {

        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += ") ";
        queryString += "VALUES (";
        queryString += ") ";


        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },


    updateOne: function (table, condition, cb) {

        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += " WHERE ";
        queryString += condition;


        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;