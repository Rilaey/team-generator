const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // make a call to Employee constructor using "super"
        super(name, id, email);

        this.github = github;
    }
    // return github from user input
    getGitHub() {
        return this.github;
    }
    // change role to Enginerr
    getRole() {
        return "Engineer";
    }
}

// export "Engineer" class
module.exports = Engineer