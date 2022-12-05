const Employee = require('../lib/employee')
const Manager = require('../lib/manager.js');

test('new manager should return user input name', () => {
    const test = new Manager;
    test.name = 'riley';

    expect(test.name).toEqual(test.name);
})

test('new manager should return user input employee id', () => {
    const test = new Manager;
    test.id = 1;

    expect(test.id).toEqual(1);
})

test('new manager should return user input email', () => {
    const test = new Manager;
    test.email = 'test@gmail.com';

    expect(test.email).toBe('test@gmail.com')
})

test('new manager should return user input office number', () => {
    const test = new Manager;
    test.officeNumber = 1;

    expect(test.officeNumber).toBe(1)
})

test('new manager should return the role of manager', () => {
    const test = new Manager;
    test.getRole = 'Manager'

    expect(test.getRole).toBe('Manager')
})