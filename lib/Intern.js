const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empName, id, email, school){
        super(empName, id, email);
        this.school = school;
    }
}

module.exports = Intern;