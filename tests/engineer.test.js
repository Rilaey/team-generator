const Engineer = require('../lib/engineer');

test('new engineer should return user input name', () => {
    const test = new Engineer('ashley', 5, 'eng@gmail.com', 'github100')

    expect(test.getName()).toBe('ashley')
})

test('new engineer should return user input id', () => {
    const test = new Engineer('ashley', 5, 'eng@gmail.com', 'github100')

    expect(test.getId()).toBe(5)
})

test('new engineer should return user input email', () => {
    const test = new Engineer('ashley', 5, 'eng@gmail.com', 'github100')

    expect(test.getEmail()).toBe('eng@gmail.com')
})

test('new engineer should return user input github', () => {
    const test = new Engineer('ashley', 5, 'eng@gmail.com', 'github100')

    expect(test.getGitHub()).toBe('github100')
})

test('new engineer should return role of engineer', () => {
    const test = new Engineer('ashley', 5, 'eng@gmail.com', 'github100')

    expect(test.getRole()).toBe('Engineer')
})