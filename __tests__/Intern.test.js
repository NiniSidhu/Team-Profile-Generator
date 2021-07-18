const Intern = require('../lib/Intern');

test ('Create a Intern Object', () => {
    const intern = new Intern('Intern', '01', 'intern@internemail.com', 'internSchool')

    expect(intern.employeeName).toEqual(expect.any(String));
    expect(intern.employeeId).toEqual(expect.any(String));
    expect(intern.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(intern.internSchool).toEqual(expect.any(String));

});

test("Get intern's school", () =>{
    const intern = new Intern('Intern', '01', 'intern@internemail.com', 'internSchool')
    
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("Get intern's role", () => {
    const intern = new Intern('Intern', '01', 'intern@internemail.com', 'internSchool')
    
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});