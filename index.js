//Packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const employee = require('./lib/employee.js')
const manager = require('./lib/manager.js')
const intern = require('./lib/intern.js')
const engineer = require('./lib/engineer.js')
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'teamprofiles.html')
const generateTeam = require('./src/template.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

//Array for team

teamArray = [];

function runApp() {

    function createTeam() {
        inquirer.prompt([{
            type: 'list',
            message: 'What type of employee do you want to add to your team?',
            name: 'addEmployee',
            choices: ['Manager', 'Engineer', 'Intern', 'No more team members.']
        }]) .then(function(userInput) {
            switch(userInput.addEmployee) {
                case 'Manager':
                    addManager();
                    break;
                    case 'Engineer':
                    addEngineer();
                    break;
                    case 'Intern':
                    addIntern();
                    break;
                    default:
                    htmlBuilder()
            }
        })
    }


// Adding team functions

function addManager() {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's employee ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the manager's office number?"
    },

    ]) .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's GitHub username?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });

    function addIntern() {
        inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school?"
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.interID, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
    });
    }
}

function htmlBuilder() {
    console.log('Team Created!')
    fs.writeFileSync(outputPath, generateTeam(teamArray), 'UTF-8')
}

createTeam();

}

runApp()