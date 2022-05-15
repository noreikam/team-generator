const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const team = [];

const addManager = () => {
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
      message: 'Enter manager phone'
    }
  ])
  .then(managerData => {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    team.push(manager);
    return promptUser();
  })
}

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
    return promptUser();
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
    return promptUser();
  })
}

const promptUser = () => {
  return inquirer.prompt(
    {
      type: 'list', 
      message: 'What would you like to do?',
      name: 'action',
      choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Complete Team']
    }
  )
  .then((response) => {
    switch (response.action) {
      case 'Add Manager': addManager();
        break;
      case 'Add Engineer': addEngineer();
        break;
      case 'Add Intern': addIntern();
        break;
      case 'Complete Team': return team;
    }
  } )
}



module.exports = promptUser;