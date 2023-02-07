const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, id, email, officeNumber){
        super(empName, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;