const Employee = require('../lib/Employee');

test ('Create a Employee Object', () => {
    const employee = new Employee('Employee', '02', 'employee@employeeemail.com')

    expect(employee.employeeName).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(String));
    expect(employee.employeeEmail).toEqual(expect.stringContaining('@'));
});

test("Get employee's name", () =>{
    const employee = new Employee('Employee', '02', 'employee@employeeemail.com')
    
    expect(employee.getName()).toEqual(expect.any(String));
});

test("Get employee's id", () =>{
    const employee = new Employee('Employee', '02', 'employee@employeeemail.com')
    
    expect(employee.getId()).toEqual(expect.any(String));
});

test("Get employee's email", () =>{
    const employee = new Employee('Employee', '02', 'employee@employeeemail.com')
    
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test("Get employee's role", () => {
    const employee = new Employee('Intern', '02', 'employee@employeeemail.com')
    
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});