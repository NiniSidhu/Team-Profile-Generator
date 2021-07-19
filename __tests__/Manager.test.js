const Manager = require('../lib/Manager');

test ('Create a Manager Object', () => {
    const manager = new Manager('Manager', '01', 'manager@manageremail.com', 'Room420')

    expect(manager.employeeName).toEqual(expect.any(String));
    expect(manager.employeeId).toEqual(expect.any(String));
    expect(manager.employeeEmail).toEqual(expect.stringContaining('@'));
    // expect(manager.employeeOfficeNumber).toEqual(expect.any(String));

});

test("Get manager's office number", () =>{
    const manager = new Manager('Manager', '01', 'manager@manageremail.com', 'Room420')
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test("Get manager's role", () => {
    const manager = new Manager('Manager', '01', 'manager@manageremail.com', 'Room420')
    
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});