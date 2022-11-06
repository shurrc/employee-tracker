const inquirer = require("inquirer"); 

const promptList = function (message, choices) { //Helper function for list questions
    return inquirer.prompt([{
        name: 'val',
        type: 'list',
        message: message,
        choices: choices,
        pageSize: 10,

    }])
    .then(answer => answer.val)
}
module.exports = promptList
