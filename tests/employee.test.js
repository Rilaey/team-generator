const Employee = require('../lib/employee')

test('new employee should return user input name', () => {
    const test = new Employee('tyler', 1, 'tyler@gmail.com');

    expect(test.getName()).toEqual('tyler')
})

test('new employee should return user input id', () => {
    const test = new Employee('tyler', 1, 'tyler@gmail.com');

    expect(test.getId()).toEqual(1)
})

test('new employee should return user input email', () => {
    const test = new Employee('tyler', 1, 'tyler@gmail.com');

    expect(test.getEmail()).toEqual('tyler@gmail.com')
})

test('new employee should return role of employee', () => {
    const test = new Employee('tyler', 1, 'tyler@gmail.com');

    expect(test.getRole()).toBe('Employee')
})