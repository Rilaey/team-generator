const Manager = require('../lib/manager.js');

test('new manager should return user input name', () => {
    const test = new Manager('ted', 21, 'ted@gmail.com', 4);

    expect(test.getName()).toBe("ted");
})

test('new manager should return user input employee id', () => {
    const test = new Manager('ted', 21, 'ted@gmail.com', 4);

    expect(test.getId()).toEqual(21);
})

test('new manager should return user input email', () => {
    const test = new Manager('ted', 21, 'ted@gmail.com', 4);

    expect(test.getEmail()).toBe('ted@gmail.com');
})

test('new manager should return user input office number', () => {
    const test = new Manager('ted', 21, 'ted@gmail.com', 4);

    expect(test.officeNumber).toBe(4)
})

test('new manager should return the role of manager', () => {
    const test = new Manager('ted', 21, 'ted@gmail.com', 4);
    
    expect(test.getRole()).toBe('Manager')
})