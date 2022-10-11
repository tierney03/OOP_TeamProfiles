const generateTeam = (team) => {

    //Creating the team
    const generateManager = manager => {
        return`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
              <p class="card-text">ID: ${manager.getID()}</p>
              <p class="card-text">Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></p>
              <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
          </div>`;
    };

    const generateEngineer = engineer => {
        return`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineer.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
              <p class="card-text">ID: ${engineer.getID()}</p>
              <p class="card-text">Email: <a href='mailto:${engineer.getEmail()}'>${manager.getEmail()}</a></p>
              <p class="card-text">GitHub: <a href='https://github.com/${engineer.getGithub()}' taget='_blank'>${engineer.getGithub()}</a></p>
            </div>
          </div>`;
    };

    const generateIntern = intern => {
        return`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${intern.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
              <p class="card-text">ID: ${intern.getID()}</p>
              <p class="card-text">Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></p>
              <p class="card-text">School: ${intern.getSchool}</p>
            </div>
          </div>`;
    };

    const html = [];
    
    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(engineer => generateManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(engineer => generateIntern(intern))
        .join('')
        );

        return html.join('');
}

// Generate HTML Page
module.exports = team => {
    return `
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profiles</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <div class="header">My Team</div>
    <body>
        <h1>Team Profiles</h1>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
        <script src="../index.js" async defer></script>
    </body>
</html>`
}