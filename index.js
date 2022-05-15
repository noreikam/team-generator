const promptUser = require('./utils/promptUser');
const generateHTML = require('./src/generateHTML');


promptUser()
  .then(teamData => {
    return generateHTML(teamData)
  })