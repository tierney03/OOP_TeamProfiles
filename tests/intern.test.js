const { default: test } = require('node:test');
const Intern = require('./lib/intern.js');

test('Receives school input', () => {
    const testSchool = 'School';
    const employeeCreate = new Intern('Tierney', 1, 'tierney_03@mac.com', testSchool);
    expect(employeeCreate.school).toBe(testSchool);
});

test('School is created from input', () => {
    const testSchool = 'School';
    const employeeCreate = new Intern('Tierney', 1, 'tierney_03@mac.com', testSchool);
    expect(employeeCreate.school()).toBe(testSchool);
});

test('Returns role', () => {
    const returnValue = 'Intern';
    const employeeCreate = new Intern('Tierney', 1, 'tierney_03@mac.com', 'School');
    expect(employeeCreate.getRole()).toBe(returnValue);
});