const { default: test } = require('node:test');
const Employee = require('./lib/employee.js');

test('Am I able to create a new employee?', () => {
    const employeeCreate = new Employee();
    expect(typeof(employeeCreate)).toBe('object');
})

test('Test name.', () => {
    const name = 'Tierney';
    const employeeCreate = new Employee(name);
    expect(employeeCreate.name).toBe(name);
})

test('Test ID.', () => {
    const id = 1;
    const employeeCreate = new Employee('Tierney', 1)
    expect(employeeCreate.id).toBe(id);
})

test('Test Email.', () => {
    const email = 'tierney_03@mac.com';
    const employeeCreate = new Employee('Tierney', 1, email);
    expect(employeeCreate.email).toBe(email);
})

test('Name received through getName function.', () => {
    const testName = 'Tierney';
    const employeeCreate = new Employee(testName);
    cexpect(employeeCreate.getName()).toBe(testName);
})

test('ID received through getId function.', () => {
    const testID = 1;
    const employeeCreate = new Employee('Tierney', testID);
    expect(employeeCreate.getId()).toBe(testID);
})

test('Email received through getEmail function.', () => {
    const testEmail = 'tierney_03@mac.com';
    const employeeCreate = new Employee ('Tierney', 1, testEmail);
    expect(employeeCreate.getEmail()).toBe(testEmail);
})

test('Role is received through getRole function', () => {
    const returnValue = 'Employee';
    const employeeCreate = new Employee('Tierney', 2, 'tierney_03@mac.com');
    expect(employeeCreate.getRole()).toBe(returnValue);
})