const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('input', () => {
        it ('should create an object with a name property, id property, email property, and github property', () => {
            const newName = 'Bob Smith'
            const newID = 1
            const newEmail = 'bobsmith@example.com'
            const newGithub = 'bobsmith'
            const employee = new Engineer(newName, newID, newEmail, newGithub);
            expect (employee.empName).toEqual(newName);
            expect (employee.id).toEqual(newID);
            expect (employee.email).toEqual(newEmail);
            expect (employee.github).toEqual(newGithub);
        })
    })
})