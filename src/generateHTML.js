// manager card
function generateManager(manager) {
    return `<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><span class="material-symbols-outlined">local_cafe</span>
        </div>
        <div class="card-body">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`
}

// engineer card 
function generateEngineer(engineer) {
    return `<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><span class="material-symbols-outlined">keyboard</span>
        </div>
        <div class="card-body">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>`
}

// intern card
function generateIntern(intern) {
    return `<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><span class="material-symbols-outlined">school</span>
        </div>
        <div class="card-body">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>
</div>`
}

// function to generate html cards
function generateHTML(data) { 
    const empArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const empRole = employee.getRole(); 

        // if statement to decide which function to call
        if (empRole === 'Manager') {
            const managerCard = generateManager(employee);
            empArray.push(managerCard);
        } else if(empRole == 'Engineer') {
            const engineerCard = generateEngineer(employee);
            empArray.push(engineerCard);
        } else if(empRole == 'Intern') {
            const internCard = generateIntern(employee);
            empArray.push(internCard);
        }
    }
    // turn empArray into a string
    const empCards = empArray.join('')

    // return to generated page function
    const generateTeam = generateTeamPage(empCards); 
    return generateTeam;
}

// generate the HTML template
function generateTeamPage(empCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="./temp_style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1 class="head-text">My Team</h1>
        </header>
    
        <section class="container">
            <div class="row">
                ${empCards}
            </div>    
        </section>  
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    </html>`
}

    module.exports = generateHTML; 