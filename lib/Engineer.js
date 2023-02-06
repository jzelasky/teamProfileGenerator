const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, id, email, github){
        super(empName, id, email);
        this.github = github;
    }
}

module.exports = Employee;