const createManager = managerArrays => {
    return `
        
        <div class = "row">
            <div class = "card"> 
                <h2 class="card-title"> Manager</h2>
                <div class = "card-body">
                    ${managerArrays.map(({employeeName, employeeId, employeeEmail, employeeRole, officeNumber }) => {
                        return `
                        <h3 class = "card-title"> ${employeeName} <span>(${employeeRole})</span></h3> 
                        <div class = "card-text"> 
                            <ul>
                                <li> ID: ${employeeId}</li>
                                <li> Email: <a href="mailto:${employeeEmail}"</li>
                                <li> Office Number: ${officeNumber}</li>
                            </ul>
                        </div>`;
                    })
                
                }        
                </div>
            </div>
        </div>
    `
};

const createEngineer = engineerArrays => {
    return `
        
        <div class = "row">
            <div class = "card"> 
                <h2 class="card-title"> Engineer</h2>
                <div class = "card-body">
                    ${engineerArrays.map(({employeeName, employeeId, employeeEmail, employeeRole, gitHubId }) => {
                        return `
                        <h3 class = "card-title"> ${employeeName} <span>(${employeeRole})</span></h3> 
                        <div class = "card-text"> 
                            <ul>
                                <li> ID: ${employeeId}</li>
                                <li> Email: <a href="mailto:${employeeEmail}"</li>
                                <li> GitHub ID: <a href="https://github.com/${gitHubId}">${gitHubId}</li>
                            </ul>
                        </div>`;
                    })
                
                }        
                </div>
            </div>
        </div>
    `
};

const createIntern = internArrays => {
    return `
        
        <div class = "row">
            <div class = "card"> 
                <h2 class="card-title"> Intern</h2>
                <div class = "card-body">
                    ${engineerArrays.map(({employeeName, employeeId, employeeEmail, employeeRole, internSchool }) => {
                        return `
                        <h3 class = "card-title"> ${employeeName} <span>(${employeeRole})</span></h3> 
                        <div class = "card-text"> 
                            <ul>
                                <li> ID: ${employeeId}</li>
                                <li> Email: <a href="mailto:${employeeEmail}"</li>
                                <li> School:${internSchool}</li>
                            </ul>
                        </div>`;
                    })
                
                }        
                </div>
            </div>
        </div>
    `
};

module.exports = teamMates => {
    const manager = []; 
    const engineer = [];
    const intern = [];

    teamMates.forEach(function (item){
        if(item.employeeRole === 'Engineer'){
            engineers.push(item);
        }
        else if(item.employeeRole === 'Intern'){
            interns.push(item);
        }
        else{
            managers.push(item);
        }
    });

    return `
    
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header> 
            <h1>My Team</h1>
        </header>
        <main class="container">
            $(createManager(managers))
            $(createEngineer(engineers))
            $(createIntern(interns))
        </main>
    </body>
    </html>
    `;
}