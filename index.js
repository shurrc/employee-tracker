//Dependencies
const promptList = require("./helper/inquirer-list")
const promptInput = require("./helper/inquirer-prompt");
const { findAll, addNewDepartment } = require("./helper/mysql");
require("console.table");
//inquirer
//mysql2






//Data




//Functions
async function start() {
    const todo = await promptList("What would you like to do",["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]);
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
    findAll('employees').then(([data]) => {
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

start()


//initiallization