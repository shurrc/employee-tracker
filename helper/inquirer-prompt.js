const inquirer = require("inquirer");

const promptInput = function (message, required = false) {   //Helper function for prompt questions
    return inquirer.prompt([{
        name: 'val',
        type: 'input',
        message: message,
        validate: input => (input.length > 0 || !required) || 'this field is required, Please try again.'
    }])
    .then(answer => answer.val);
}

module.exports = promptInput