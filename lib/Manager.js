const Employee = require('./Employee');

class Manager extends Employee{
    constructor(employeeName, employeeId, employeeEmail, officeNumber){
        super(employeeName, employeeId, employeeEmail);

        this.officeNumber = officeNumber;
        this.employeeRole = 'Manager';
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return this.employeeRole;
    }
};

module.exports = Manager; 