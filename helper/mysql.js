const mysql = require("mysql2");
const db = require("../db/connection");

function findAll(table) {
    return db.promise().query(`SELECT * FROM ${table};`)
    
}

function findAllEmployees(employees) {
    return db.promise().query(`SELECT *
    FROM ${employees}
    LEFT JOIN roles ON employees.roles_id = roles.id
    LEFT JOIN departments ON roles.departments_id = departments_id;`)
}

function addNewDepartment(department) {
    return db.promise().query('INSERT INTO departments (department_name) VALUES (?);', department)
}

function addNewRole(role) {
    return db.promise().query('INSERT INTO roles (title, salary, departments_id) VALUES (?, ?, ?);', role)
}

function addNewEmployee(employee) {
    return db.promise().query('INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?);', employee)
}

module.exports = {findAll, addNewDepartment,findAllEmployees, addNewRole, addNewEmployee};