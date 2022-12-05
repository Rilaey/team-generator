const Intern = require('../lib/intern')

test('new intern should return user input name', () => {
    const test = new Intern;
    test.name = 'riley';

    expect(test.name).toEqual('riley')
})

test('new intern should return user input id', () => {
    const test = new Intern;
    test.id = 5;

    expect(test.id).toEqual(5)
})

test('new intern should return user input email', () => {
    const test = new Intern;
    test.email = 'new@gmail.com';

    expect(test.email).toEqual('new@gmail.com')
})

test('new intern should return user input school', () => {
    const test = new Intern;
    test.getSchool = 'ucf';

    expect(test.getSchool).toBe('ucf')
})

test('new intern should return role of intern', () => {
    const test = new Intern;
    test.getRole = 'Intern';

    expect(test.getRole).toBe('Intern')
})