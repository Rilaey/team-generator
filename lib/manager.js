const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    // returns the position of Manager
    getRole() {
        return "Manager"
    }
}

// export Manager class
module.exports = Manager;