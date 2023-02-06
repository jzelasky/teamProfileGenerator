const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('input', () => {
        it ('should create an object with a name property, id property, email property, and office # property', () => {
            const newName = 'Bob Smith'
            const newID = 1
            const newEmail = 'bobsmith@example.com'
            const newOffice = 1
            const employee = new Manager(newName, newID, newEmail, newOffice);
            expect (employee.empName).toEqual(newName);
            expect (employee.id).toEqual(newID);
            expect (employee.email).toEqual(newEmail);
            expect (employee.officeNumber).toEqual(newOffice);
        })
    })
})