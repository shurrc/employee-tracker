DROP DATABASE IF EXISTS workplace_db;
CREATE DATABASE workplace_db;

USE workplace_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY(id)

);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8,0),
    departments_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(departments_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);


DESCRIBE departments;

DESCRIBE roles;

DESCRIBE employees;