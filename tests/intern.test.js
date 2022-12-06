const Intern = require('../lib/intern')

test('new intern should return user input name', () => {
    const test = new Intern('riley', 9, 'test@gmail.com', 'ucf');

    expect(test.getName()).toBe('riley')
})

test('new intern should return user input id', () => {
    const test = new Intern('riley', 9, 'test@gmail.com', 'ucf');

    expect(test.getId()).toBe(9)
})

test('new intern should return user input email', () => {
    const test = new Intern('riley', 9, 'test@gmail.com', 'ucf');;

    expect(test.getEmail()).toBe('test@gmail.com')
})

test('new intern should return user input school', () => {
    const test = new Intern('riley', 9, 'test@gmail.com', 'ucf');

    expect(test.getSchool()).toBe('ucf')
})

test('new intern should return role of intern', () => {
    const test = new Intern('riley', 9, 'test@gmail.com', 'ucf');

    expect(test.getRole()).toBe('Intern')
})