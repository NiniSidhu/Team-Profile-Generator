const createManager = managerArrays => {
    return `
        
        <div class="col-3">
            <div class = "card "> 
                
                
                    ${managerArrays.map(({employeeName, employeeId, employeeEmail, employeeRole, officeNumber }) => {
                        return `
                        <div class="card-title">
                            <h2> ${employeeRole}</h2>
                            <h3> ${employeeName}</h3>
                        </div> 
                        <div class = "card-body">
                            <div class = "card-text"> 
                                <ul>
                                    <li> ID: ${employeeId}</li>
                                    <li> Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a></li>
                                    <li> Office Number: ${officeNumber}</li>
                                </ul>
                            </div>
                        </div>`;
                    })
                
                }        
                
            </div>
        </div>
    `
};

const createEngineer = engineerArrays => {
    return `
        
        <div class="col-3">
            <div class = "card"> 
                
                    ${engineerArrays.map(({employeeName, employeeId, employeeEmail, employeeRole, gitHubId }) => {
                        return `
                        <div class="card-title">
                            <h2> ${employeeRole}</h2>
                            <h3> ${employeeName}</h3>
                        </div> 
                        <div class = "card-body"> 
                            <div class = "card-text"> 
                                <ul>
                                    <li> ID: ${employeeId}</li>
                                    <li> Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a></li>
                                    <li> GitHub ID: <a href="https://github.com/${gitHubId}"></a>${gitHubId}</li>
                                </ul>
                            </div>
                        </div>`;
                    })
                
                }        
                
            </div>
        </div>
    `
};

const createIntern = internArrays => {
    return `
        
        <div class="col-3">
            <div class = "card"> 
                
                    ${internArrays.map(({employeeName, employeeId, employeeEmail, employeeRole, internSchool }) => {
                        return `
                        <div class="card-title">
                            <h2> ${employeeRole}</h2>
                            <h3> ${employeeName}</h3>
                        </div>
                        <div class = "card-body"> 
                            <div class = "card-text"> 
                                <ul>
                                    <li> ID: ${employeeId}</li>
                                    <li> Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a></li>
                                    <li> School: ${internSchool}</li>
                                </ul>
                            </div>
                        </div>`;
                    })
                
                }        
                
            </div>
        </div>
    `
};

module.exports = teamMates => {
    const managers = []; 
    const engineers = [];
    const interns = [];

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
            <div class="row">
                ${createManager(managers)}
                ${createEngineer(engineers)}
                ${createIntern(interns)}
            </div>
        </main>
    </body>
    </html>
    `;
}