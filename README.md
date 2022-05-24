
# Team Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      
## Table of Contents

[Description](#description)<br>[Installation](#installation)<br>[Usage Information](#usageInfo)<br>[License](#license)<br>[Questions](#questions)<br>[Demonstration](#demonstration)


## Description<a id='description'></a>
This repository contains an app for a manager to generate an HTML directory for his team.  It is run through the console, collects data using Inquirer prompts, stores the data using custom objects,  produces the HTML from a JavaScript template, and writes the HTML output to the /dist directory.  Teams consist of a manager, engineers, and interns.  For every team member, a name and email is required.  Additional data points are: 
  * Manager: office number
  * Engineer: Github username
  * Intern: School


## Installation<a id='installation'></a>
Run 'npm i' from the console to install dependencies.  

## Usage Information<a id='usageInfo'></a>
Run 'node index.js' to begin the prompts.  First the name, email, and office number of the manager must be input.  Next, a prompt offers the options of adding an engineer, adding an intern, or completing the team.  Depending on the response, the user will be prompted with engineer questions, prompted with intern questions, or the team will be completed and HTML produced.  After each engineer or intern, the add engineer/add intern/complete team prompt will be shown again until complete team is chosen.  

## License<a id='license'></a>
This project is covered by the MIT License license

## Demonstration<a id='demonstration'></a>
[YouTube](https://www.youtube.com/watch?v=uyAjQGkvCgo)

## Questions?<a id='questions'></a>
Contact me at [GitHub](https://github.com/noreikam) or by email at <noreikam1@gmail.com>
    