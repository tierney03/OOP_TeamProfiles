const { default: test } = require('node:test');
const Employee = require('./lib/employee.js');

test('Am I able to create a new employee?', () => {
    const employeeCreate = new Employee();
    expect(typeof(employeeCreate)).tobe('object');
})

test('Test name.', () => {
    const name = 'Tierney';
    const employeeCreate = new Employee(name);
    expect(employeeCreate.name).tobe(name);
})

test('Test ID.', () => {
    const id = 1;
    const employeeCreate = new Employee('Tierney', 1)
    expect(employeeCreate.id).tobe(id);
})

test('Test Email.', () => {
    const email = 'tierney_03@mac.com';
    const employeeCreate = new Employee('Tierney', 1, email);
    expect(employeeCreate.email).tobe(email);
})

test('Name received through getName function.', () => {
    const testName = 'Tierney';
    const employeeCreate = new Employee(testName);
    cexpect(employeeCreate.getName()).tobe(testName);
})

test('ID received through getId function.', () => {
    const testID = 1;
    const employeeCreate = new Employee('Tierney', testID);
    expect(employeeCreate.getId()).tobe(testID);
})

test('Email received through getEmail function.', () => {
    const testEmail = 'tierney_03@mac.com';
    const employeeCreate = new Employee ('Tierney', 1, testEmail);
    expect(employeeCreate.getEmail()).tobe(testEmail);
})

test('Role is received through getRole function', () => {
    const returnValue = 'Employee';
    const employeeCreate = new Employee('Tierney', 2, 'tierney_03@mac.com');
    expect(employeeCreate.getRole()).tobe(returnValue);
})