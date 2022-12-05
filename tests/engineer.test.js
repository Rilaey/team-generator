const Engineer = require('../lib/engineer');

test('new engineer should return user input name', () => {
    const test = new Engineer;
    test.name = 'ashley';

    expect(test.name).toEqual('ashley')
})

test('new engineer should return user input id', () => {
    const test = new Engineer;
    test.id = 9;

    expect(test.id).toEqual(9)
})

test('new engineer should return user input email', () => {
    const test = new Engineer;
    test.email = 'eng@gmail.com';

    expect(test.email).toEqual('eng@gmail.com')
})

test('new engineer should return user input github', () => {
    const test = new Engineer;
    test.getGitHub = 'https://github.com/Rilaey';

    expect(test.getGitHub).toBe('https://github.com/Rilaey')
})

test('new engineer should return role of engineer', () => {
    const test = new Engineer;
    test.getRole = 'Engineer';

    expect(test.getRole).toBe('Engineer')
})