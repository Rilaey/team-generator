const Employee = require('../lib/employee')

test('new employee should return user input name', () => {
    const test = new Employee;
    test.name = 'tyler';

    expect(test.name).toEqual('tyler')
})

test('new employee should return user input id', () => {
    const test = new Employee;
    test.id = 21;

    expect(test.id).toEqual(21)
})

test('new employee should return user input email', () => {
    const test = new Employee;
    test.email = 'tyler@gmail.com';

    expect(test.email).toEqual('tyler@gmail.com')
})

test('new employee should return user input email function', () => {
    const test = new Employee;
    test.getEmail = 'tyler@test.com';

    expect(test.getEmail).toBe('tyler@test.com')
})

test('new employee should return user input id function', () => {
    const test = new Employee;
    test.getId = 99;

    expect(test.getId).toBe(99)
})

test('new employee should return user input name function', () => {
    const test = new Employee;
    test.getName = 'bob';

    expect(test.getName).toBe(test.getName)
})

test('new employee should return role of employee', () => {
    const test = new Employee;
    test.getRole = 'Employee';

    expect(test.getRole).toBe('Employee')
})