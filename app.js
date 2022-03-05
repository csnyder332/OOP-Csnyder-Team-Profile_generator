const inquirer = require('inquirer');
const fs = require('fs');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Choices = require('inquirer/lib/objects/choices');

// const team = [];

inquirer.prompt(
    {
        type: "list",
        name: "role",
        message: "what is your role?",
        choices: ["Engineer", "Intern", "Manager"]
    },
)