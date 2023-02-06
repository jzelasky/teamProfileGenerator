const Intern = require('../lib/Intern');

describe('Internr', () => {
    describe('input', () => {
        it ('should create an object with a name property, id property, email property, and school property', () => {
            const newName = 'Bob Smith'
            const newID = 1
            const newEmail = 'bobsmith@example.com'
            const newSchool = 'Example University'
            const employee = new Intern(newName, newID, newEmail, newSchool);
            expect (employee.empName).toEqual(newName);
            expect (employee.id).toEqual(newID);
            expect (employee.email).toEqual(newEmail);
            expect (employee.school).toEqual(newSchool);
        })
    })
})