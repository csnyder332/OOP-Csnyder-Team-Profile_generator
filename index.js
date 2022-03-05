const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Choices = require('inquirer/lib/objects/choices');
const { resolveObjectURL } = require('buffer');
const team = [];

function appStart() {
    createHTML();
    addEmployees();
}
function addEmployees() {
    inquirer.prompt({
        message: 'Enter manager name',
        name: 'name'
    },
        {
            message: 'Enter manager id',
            name: 'id'
        },
        {
            message: "Enter manager email address",
            name: 'email'
        },
        {
            message: "Enter manager office number",
            name: 'office'
        },
        {
            type: 'list',
            message: 'Would you like to add more team members?',
            choices: [Yes, No]

        },
        {
            type: 'list',
            message: 'Select next employee role',
            Choices: [
                'Engineer',
                'Intern',
            ],
            name: addMoreRoles

                .then(function (addMoreRoles) {
                    if (addMoreRoles === Engineer) {
                        inquirer.prompt(
                            {
                                message: 'Enter engineer name',
                                name: 'name'
                            },
                            {
                                message: 'Enter engineer id',
                                name: 'id'
                            },
                            {
                                message: "Enter engineer email address",
                                name: 'email'
                            },
                            {
                                message: "Enter engineer Github username",
                                name: 'github'
                            }),
                            else (addMoreRoles === Intern) {
                        inquirer.prompt(
                            {
                                message: 'Enter intern name',
                                name: 'name'
                            },
                            {
                                message: 'Enter intern id',
                                name: 'id'
                            },
                            {
                                message: "Enter intern email address",
                                name: 'email'
                            },
                            {
                                message: "Enter engineer school",
                                name: 'school'
                            })




