const mysql = require("mysql2");
const db = require("../db/connection");

function findAll(table) {
    return db.promise().query(`SELECT * FROM ${table};`)
    
}

function addNewDepartment(department) {
    return db.promise().query('INSERT INTO departments (department_name) VALUES (?);', department)
}



module.exports = {findAll, addNewDepartment};