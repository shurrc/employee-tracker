const inquirer = require("inquirer");

const promptList = function (message, choices) {
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
