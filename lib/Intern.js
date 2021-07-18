const Employee = require('./Employee');

class Intern extends Employee{
    constructor(employeeName, employeeId, employeeEmail, internSchool){
        super(employeeName, employeeId, employeeEmail);

        this.internSchool = internSchool;
        this.employeeRole = 'Intern';
    }
    getSchool(){
        return this.internSchool;
    }
    getRole(){
        return this.employeeRole;
    }
};

module.exports = Intern; 