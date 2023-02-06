const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

let manager
let engineer
let intern

/*
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/

function init(){
    console.log("Welcome to team profile generator!")
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter team manager's name:",
                name: 'mNameInput'
            },
            {
                type: 'input',
                message: "Enter team manager's ID #:",
                name: 'mIdInput'
            },
            {
                type: 'input',
                message: "Enter team manager's email address:",
                name: 'mEmailInput'
            },
            {
                type: 'input',
                message: "Enter team manager's office #:",
                name: 'OfficeInput'
            }
        ])
        .then((answers) => {
            manager = new Manager(answers.mNameInput, answers.mIdInput, answers.mEmailInput, answers.OfficeInput)
            choiceHandler();
        })
}

function choiceHandler () {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What do you want to do now?",
                name: 'choice',
                choices: ['Add engineer', 'Add intern', 'Finish building my team']
            }
        ])
        .then((answers) => {
            if(String(answers.choice) === 'Add engineer'){
                addEngineer();
            } else if (String(answers.choice) === 'Add intern'){
                addIntern();
            } else {
                generateHTML();
            }
        })
   
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter engineer's name:",
                name: 'eNameInput'
            },
            {
                type: 'input',
                message: "Enter engineer's ID #:",
                name: 'eIdInput'
            },
            {
                type: 'input',
                message: "Enter engineer's email address:",
                name: 'eEmailInput'
            },
            {
                type: 'input',
                message: "Enter engineer's github username:",
                name: 'githubInput'
            }
        ])
        .then((answers) => {
            engineer = new Engineer(answers.eNameInput, answers.eIdInput, answers.eEmailInput, answers.githubInput)
            choiceHandler();
        })
}


function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter intern's name:",
                name: 'iNameInput'
            },
            {
                type: 'input',
                message: "Enter intern's ID #:",
                name: 'iIdInput'
            },
            {
                type: 'input',
                message: "Enter intern's email address:",
                name: 'iEmailInput'
            },
            {
                type: 'input',
                message: "Enter intern's school name:",
                name: 'schoolInput'
            }
        ])
        .then((answers) => {
            intern = new Intern(answers.iNameInput, answers.iIdInput, answers.iEmailInput, answers.schoolInput)
            choiceHandler();
        })

}

function generateHTML(){
    console.log(intern)
    console.log(engineer)
}

init();