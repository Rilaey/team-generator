// import required modules inquirer and file system
const inquirer = require('inquirer');
const fs = require('fs');

// import possible team staff
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

// import generate html function
const generateHTML = require('./src/generateHTML');

const managerQuestions = [
        {
            name: 'name',
            message: 'What is your name?',
            type: 'input',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please input your name.')
                }
            }
        },
        {
            name: 'id',
            message: 'What is your employee ID?',
            type: 'input',
            validate: idInput => {
                if(idInput) {
                    return true
                } else {
                    console.log('Please input your employee ID.')
                }
            }
        },
        {
            name: 'email',
            message: 'What is your email?',
            type: 'input',
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log('Please input your email.')
                }
            }
        },
        {
            name: 'office',
            message: 'What is your office number',
            type: 'input',
            validate: officeInput => {
                if(officeInput) {
                    return true
                } else {
                    console.log('Please input your office number.')
                }
            }
        },
        {
            name: 'members',
            message: 'Are there more members of your team?',
            type: 'list',
            choices: ['Engineer', 'Intern', 'No, finish building my team.']
        }
    ];

// function init() {
//     inquirer.prompt(managerQuestions)
//     .then(function(data) {
//         if(data.choices == 'Intern') {
//             inquirer.prompt(managerQuestions)
//         }
//     })
// }

// init()