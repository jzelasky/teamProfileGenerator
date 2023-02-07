const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

let manager;
let engineer = [];
let intern = [];
let internHTML = '';
let managerHTML = '';
let engineerHTML = '';

function init(){
    console.log("Welcome to team profile generator!")
    addManager();
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
                genreateManagerCard();
                generateEngineerCard();
                generateInternCard();
                generateHTML();
            }
        })
   
}

function addManager () {
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
            engineer.push(new Engineer(answers.eNameInput, answers.eIdInput, answers.eEmailInput, answers.githubInput))
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
            intern.push(new Intern(answers.iNameInput, answers.iIdInput, answers.iEmailInput, answers.schoolInput));
            choiceHandler();
        })

}

function genreateManagerCard () {
    managerHTML += `<div class="card mx-3 my-5" style="width: 18rem;">
            <div class="card-body bg-primary text-light">
              <h5 class="card-title"><strong>${manager.empName}</strong></h5>
              <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush p-3 bg-light">
              <li class="list-group-item">ID #: ${manager.id}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${manager.email}">${manager.email}</a></li>
              <li class="list-group-item">Office: ${manager.officeNumber}</li>
            </ul>
        </div>`
}

function generateEngineerCard() {
    for (let i=0; i < engineer.length; i++){
       engineerHTML += `<div class="card mx-3 my-5" style="width: 18rem;">
            <div class="card-body bg-primary text-light">
              <h5 class="card-title"><strong>${engineer[i].empName}</strong></h5>
              <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush p-3 bg-light">
              <li class="list-group-item">ID #: ${engineer[i].id}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${engineer[i].email}">${engineer[i].email}</a></li>
              <li class="list-group-item">Github: <a href = "github.com/${engineer[i].github}">${engineer[i].github}</a></li>
            </ul>
        </div>`
    }
}

function generateInternCard() {
    for (let i=0; i < intern.length; i++){
       internHTML += `<div class="card mx-3 my-5" style="width: 18rem;">
            <div class="card-body bg-primary text-light">
              <h5 class="card-title"><strong>${intern[i].empName}</strong></h5>
              <p class="card-text">Intern</p>
            </div>
            <ul class="list-group list-group-flush p-3 bg-light">
              <li class="list-group-item">ID #: ${intern[i].id}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${intern[i].email}">${intern[i].email}</a></li>
              <li class="list-group-item">School: ${intern[i].school}</li>
            </ul>
        </div>`
    }
}

function generateHTML(){
    fs.writeFile('./dist/index.html', 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="p-3 text-center bg-danger text-light">
        <h1>My Team</h1>
    </header>
    <main class="d-flex flex-wrap justify-content-center">
        ${managerHTML}
        ${engineerHTML}
        ${internHTML}
    </main>
</body>
</html>
    `,
    (err) => err ? console.error(err) : console.log('HTML file created!')) 
}

init();