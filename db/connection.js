const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'felix@747',
    database: 'workplace_db'
});

connection.connect(function(err){
    if (err) throw err
});

module.exports = connection
