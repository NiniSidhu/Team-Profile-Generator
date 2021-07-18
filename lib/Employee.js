class Employee {
    constructor(employeeName, employeeId, employeeEmail){
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
        this.employeeRole = 'Employee';
    }

    getName (){
        return this.employeeName;
    };
    getId (){
        return this.employeeId;
    };
    getEmail (){
        return this.employeeEmail;
    };
    getRole (){
        return.this.employeeRole;
    }
};

module.exports = Employee; 