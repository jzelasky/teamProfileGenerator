const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, id, email, office){
        super(empName, id, email);
        this.office = office;
    }
}

module.exports = Manager;