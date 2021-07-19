const Engineer = require('../lib/Engineer');

test ('Create a Engineer Object', () => {
    const engineer = new Engineer('Engineer', '03', 'engineer@engineeremail.com', 'GitHubId')

    expect(engineer.employeeName).toEqual(expect.any(String));
    expect(engineer.employeeId).toEqual(expect.any(String));
    expect(engineer.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(engineer.gitHubId).toEqual(expect.any(String));

});

test("Get engineer's GitHub ID", () =>{
    const engineer = new Engineer('Engineer', '03', 'engineer@engineeremail.com', 'GitHubId')
    
    expect(engineer.getGitHubId()).toEqual(expect.any(String));
});

test("Get intern's role", () => {
    const engineer = new Engineer('Intern', '03', 'engineer@engineeremail.com', 'GitHubId')
    
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});