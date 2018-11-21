var mysql = require('mysql');

var connection = mysql.createConnection({

    port: 3306, 
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect(function(err){

    if (err) throw err; 
    console.log("We are in business!"); 
})

module.exports = connection; 