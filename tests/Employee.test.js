const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('input', () => {
        it ('should create an object with a name property, id property, and email property', () => {
            const newName = 'Bob Smith'
            const newID = 1
            const newEmail = 'bobsmith@example.com'
            const employee = new Employee(newName, newID, newEmail);
            expect (employee.empName).toEqual(newName);
            expect (employee.id).toEqual(newID);
            expect (employee.email).toEqual(newEmail);
        })
    })
})