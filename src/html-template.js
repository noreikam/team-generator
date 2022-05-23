const generateRowThree = (officeNumber, github, school) => {
  if(officeNumber) {
    return `Office Number: ${officeNumber}`
  }
  else if (github) {
    return `Github: <a href="https://github.com/${github}" target="_blank">${github}</a>`
  } else {
    return `School: ${school}`
  }
}

const generateRole = role => {
  if (role === 'Manager') {
    return `<i class="fa-solid fa-mug-hot"></i> Manager`
  } else if (role === 'Engineer') {
    return `<i class="fa-solid fa-glasses"></i> Engineer`
  } else {
    return `<i class="fa-solid fa-user-graduate"></i> Intern`
  }
}

const generateTeam = teamData => {
  return `${teamData.map(({ name, id, email, role, officeNumber, github, school }) => {
    return ` 
      <article>
        <div class="card-header">
          <h3>${name}</h3>
          <h3>${generateRole(role)}</h3>
        </div>
        <div class="card-body">
          <h6>ID: ${id}</h6>
          <h6> Email: <a href="mailto: ${email}">${email}</a></h6>
          <h6>${generateRowThree(officeNumber, github, school)}</h6>
        </div>
      </article>
    `; 
    }).join('')
  }`
}


const generateHTML = teamData => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Team</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
</head>

<body>
  <header>
    <div>
      <h1>My Team</h1>
    </div>
  </header>

  <main>
    ${generateTeam(teamData)}
  </main>
</body>

</html>`
}

module.exports = generateHTML