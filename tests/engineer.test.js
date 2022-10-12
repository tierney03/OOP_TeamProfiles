const { default: test } = require('node:test');
const Engineer = require('./lib/engineer.js');

test('Can receive github info.', () => {
    const testGithub = 'tierney03';
    const employeeCreate = new Engineer('Tierney', 1, 'tierney_03@mac.com', testGithub);
    expect(employeeCreate.github).toBe(testGithub);
});

test('Can return a github with getGithub.', () => {
    const testGithub = 'tierney03';
    const employeeCreate = new Engineer('Tierney', 1, 'tierney_03@mac.com', testGithub);
    expect(employeeCreate.github()).toBe(testGithub);
});

test('Returns role.', () => {
    const returnValue = 'Engineer';
    const employeeCreate = new Engineer('Tierney', 1, 'tierney_03@mac.com', 'tierney03');
    expect(employeeCreate.getRole()).toBe(returnValue);
});