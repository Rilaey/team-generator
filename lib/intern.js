const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    // return school from user input
    getSchool() {
        return this.school;
    }
    // change role to intern
    getRole() {
        return "Intern";
    }
}

// export "Intern" class
module.exports = Intern