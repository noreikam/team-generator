const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlTemplate = require('./src/html-template');
const { writeFile, copyFile } = require('./utils/generate-files');

const team = [];

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input', 
      name: 'name', 
      message: 'Enter engineer name'
    }, 
    {
      type: 'input', 
      name: 'id', 
      message: 'Enter engineer id'
    }, 
    {
      type: 'input', 
      name: 'email', 
      message: 'Enter engineer email'
    }, 
    {
      type: 'input', 
      name: 'github', 
      message: 'Enter engineer github'
    }
  ])
  .then(engineerData => {
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
    team.push(engineer);
    return promptTeam();
  })
}

const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input', 
      name: 'name', 
      message: 'Enter intern name'
    }, 
    {
      type: 'input', 
      name: 'id', 
      message: 'Enter intern id'
    }, 
    {
      type: 'input', 
      name: 'email', 
      message: 'Enter intern email'
    }, 
    {
      type: 'input', 
      name: 'school', 
      message: 'Enter intern school'
    }
  ])
  .then(internData => {
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
    team.push(intern);
    return promptTeam();
  })
}

const promptTeam = () => {
  return inquirer.prompt(
    {
      type: 'list', 
      message: 'What would you like to do?',
      name: 'action',
      choices: ['Add Engineer', 'Add Intern', 'Complete Team']
    }
  )
  .then((response) => {
    switch (response.action) {
      case 'Add Engineer': addEngineer();
        break;
      case 'Add Intern': addIntern();
        break;
      case 'Complete Team':
        // return team;
        writeFile(htmlTemplate(team));
        copyFile();
        break;
    }
  } )
}


const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input', 
      name: 'name', 
      message: 'Enter manager name'
    }, 
    {
      type: 'input', 
      name: 'id', 
      message: 'Enter manager id'
    }, 
    {
      type: 'input', 
      name: 'email', 
      message: 'Enter manager email'
    }, 
    {
      type: 'input', 
      name: 'officeNumber', 
      message: 'Enter manager office number'
    }
  ])
  .then(managerData => {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    team.push(manager);
    return promptTeam();
  })
}

promptManager()
  // .then(team => {
  //   return htmlTemplate(team);
  // })
  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  // .catch(err => {
  //   console.log(err);
  // });
