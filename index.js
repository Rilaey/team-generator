// import required modules inquirer and file system
const inquirer = require('inquirer');
const fs = require('fs');

// import staff
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

// generate HTML
const generateHTML = require("./src/generateHTML");

// team
const teamArr = [];

// add manager prompts
const managerQuestions = () => {
    return inquirer.prompt
    ([
        {
            name:"name",
            message:"What is your name?",
            type:"input",
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please input your name.')
                }
            }
        },
        {
            name:"id",
            message:"What is the manager employee id?",
            type:"input",
            validate: idInput => {
                if(idInput) {
                    return true
                } else {
                    console.log('Please input your employee ID.')
                }
            }
        },
        {
            name:"email",
            message:"What is you email?",
            type:"input",
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log('Please input your email.')
                }
            }
        },
        {
            name:"officeNumber",
            message:"What is the office number?",
            type:"input",
            validate: officeInput => {
                if(officeInput) {
                    return true
                } else {
                    console.log('Please input your office number.')
                }
            }
        },
    ])
    .then (managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArr.push(manager);
    })
}

const newEmployeeQuestions = () => {
    return inquirer.prompt
    ([
        {
            type:"list",
            name:"role",
            choices:["Engineer", "Intern"]
        },
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
            when: (input) => input.role === "Engineer",
            name:"github",
            type:"input",
            message:"What is your github username?",
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log('Please input your email.')
                }
            }
        },
        {
            when: (input) => input.role === "Intern",
            type:"input",
            name:"school",
            message:"What is the school of the intern?",
        },
        {
            type: "confirm",
            name:"more",
            message:"Would you like to add more team members?",

        }
    ])
    .then(function(employeeInput){
        let {name, id, email, role, github, school, more} = employeeInput;
        let employee;
        
        if (role == "Engineer"){
            employee = new Engineer (name, id, email, github);
        } else if(role == "Intern") {
            employee = new Intern (name, id, email, school);
        }

        teamArr.push(employee);

        if (more) {
            return newEmployeeQuestions(teamArr);
        }
        else{
            return teamArr;
        }
    })
}



// write file function using fs
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Team Built! Success!")
        }
    })
};

// steps for the application to run
managerQuestions()
    .then(newEmployeeQuestions)
    .then(function(teamArr){
        return generateHTML(teamArr);
    })
    .then(function(HTML){
        return writeFile(HTML);
    })
    .catch(function(err){
        console.log(err);
    })