const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

let manager;
let engineer = [];
let intern = [];

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
        <div class="card mx-3 my-5" style="width: 18rem;">
            <!--Section to be repeated for each employee-->
            <div class="card-body bg-primary text-light">
              <h5 class="card-title"><strong>Employee</strong></h5>
              <p class="card-text">Employee Role</p>
            </div>
            <ul class="list-group list-group-flush p-3 bg-light">
              <li class="list-group-item">ID:</li>
              <li class="list-group-item">Email:</li>
              <li class="list-group-item">Office/Github/School:</li>
            </ul>
        </div>
    </main>
</body>
</html>
    `,
    (err) => err ? console.error(err) : console.log('HTML file created!'))
}

init();