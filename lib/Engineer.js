const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(employeeName, employeeId, employeeEmail, gitHubId){
        super(employeeName, employeeId, employeeEmail);

        this.gitHubId = gitHubId;
        this.employeeRole = 'Engineer';
    }
    getOfficeNumber(){
        return this.gitHubId;
    }
    getRole(){
        return this.employeeRole;
    }
};

module.exports = Engineer; 