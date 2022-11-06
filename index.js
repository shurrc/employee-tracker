const promptList = require("./helper/inquirer-list")
const promptInput = require("./helper/inquirer-prompt");
const { findAll, addNewDepartment, addNewRole, addNewEmployee, findAllEmployees} = require("./helper/mysql");
require("console.table");


async function start() {
    const todo = await promptList("What would you like to do",["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add a manager", "Add an employee", "Update an employee role"]);
    console.log(todo);
    switch(todo) {
        case "View all departments":
            allDepartment()
            break;
        case 'View all roles':
            allRoles()
            break;
        case 'View all employees':
            allEmployees()
            break;
        case 'Add a department':
            addDepartment()
            break;
        case 'Add a role':
            addRole()
            break;
        case 'Add a manager':
            addManager()
            break;
        case 'Add an employee':
            addEmployee()
            break;
        case 'Update an employee role':
            updateRole()
            break;
            default:
                console.log("Broken switch statement");
            
    }
}

function allDepartment() {
    findAll('departments').then(([data]) => {
        console.table(data);
        setTimeout(() => start(), 3000);
    }) 
};

function allRoles() {
    findAll('roles').then(([data]) => {
        console.table(data)
        setTimeout(() => start(), 3000);
    }) 
};

function allEmployees() {
    findAllEmployees('employees').then(([data]) => {
        console.table(data)
        setTimeout(() => start(), 3000);
    }) 
};

async function addDepartment() {
    const answer = await promptInput("What is the name of the department?");
    addNewDepartment(answer).then((data) => {
        console.log('department added!')
        setTimeout(() => start(), 3000);
    })

}

async function addRole() {
    const roleName = await promptInput("What is the name of the role you would like to add?");
    let salary = await promptInput("What is the salary of this position?");
    salary = parseInt(salary)
    await findAll('departments').then(([data]) => {
        console.table(data);
    });
    let department = await promptInput("What is the id of the department this role belongs too? Reference the table above");
    department = parseInt(department);
    const array = [roleName, salary, department];
    console.log(array)
    addNewRole(array).then((data) => {
        console.log('role added!')
        setTimeout(() => start(), 3000);
    })
}

async function addManager() {
    const firstName = await promptInput("What is your first name?");
    const lastName = await promptInput("What is your last name?");
    await findAll('roles').then(([data]) => {
        console.table(data);
    });
    let role = await promptInput("What is the id of your role? Reference table above");
    role = parseInt(role);
    let type = null
    const array = [firstName, lastName, role, type]
    addNewEmployee(array).then((data) => {
        console.log('Manager added!')
        setTimeout(() => start(), 3000);
    })
}


async function addEmployee() {
    const firstName = await promptInput("What is your first name?");
    const lastName = await promptInput("What is your last name?");
    await findAll('roles').then(([data]) => {
        console.table(data);
    });
    let role = await promptInput("What is the id of your role? Reference table above");
    role = parseInt(role);
    await findAll('employees').then(([data]) => {
        console.table(data);
    });
    let manager = await promptInput("What is the id of your manager? Reference the table above");
    manager = parseInt(manager);
    const array = [firstName, lastName, role, manager];
    addNewEmployee(array).then((data) => {
        console.log('Employee added!')
        setTimeout(() => start(), 3000);
    })
}

start()