const { default: test } = require('node:test');
const Manager = require('./lib/manager.js');

test('Receives input for officeNumber.', () => {
    const testOfficeNumber = 1234;
    const employeeCreate = new Manager('Tierney', 1, 'tierney_03@mac.com', testOfficeNumber);
    expect(employeeCreate.officeNumber).toBe(testOfficeNumber);
});

test('Returns an officeNumber from input.', () => {
    const testOfficeNumber = 1234;
    const employeeCreate = new Manager('Tierney', 1, 'tierney_03@mac.com', testOfficeNumber);
    expect(employeeCreate.getOfficeNumber()).toBe(testOfficeNumber);
});

test('Returns role.', () => {
    const returnValue = 'Manager';
    const employeeCreate = new Manager('Tierney', 1, 'tierney_03@mac.com', 1234);
    expect(employeeCreate.getRole()).toBe(returnValue);
});