// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: `What is the title of your project?`,
        name: 'title',
    },
    {
        type: 'input',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?\n`,
        name: 'description',
    },
    // {
    //     type: 'editor',
    //     message: `If your README is long, add a table of contents to make it easy for users to find what they need.`,
    //     name: 'tableOfContent',
    // },
    {
        type: 'input',
        message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
        name: 'installation',
    },
    {
        type: 'input',
        message: `Provide instructions and examples for use.`,
        name: 'usage',
    },
    {
        type: 'input',
        message: `List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.`,
        name: 'contributing',
    },
    {
        type: 'list',
        message: `Select your License:`,
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        message: `List out test cases and their expected output.`,
        name: 'test',
    },
    {
        type: 'input',
        message: `List out test cases and their expected output.`,
        name: 'github',
    },
    {
        type: 'input',
        message: `List out test cases and their expected output.`,
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
      );
}

const makeReadMe = (data) => {
    return `
# ${data.title}
${getLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#test)
- [Questions](#questions)
    - [Github Link](#github)
    - [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.contributing}

## License
${getLicenseDescription(data.license)}

## Tests
${data.test}

## Questions

### Github
[Github Page](https://www.github.com/${data.github})

### Contact
Reach out to ${data.email} if there are any questions.
    `;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const content = makeReadMe(responses);
        writeToFile('README.md', content);
    });
}

const getLicenseDescription = (license) => {
    if (license == 'None' || !license) {
        return 'This project is not covered under a license.'
    }
    return `This project is covered under the ${license} license.`
}

const getLicenseBadge = (license) => {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'GNU GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        default:
            return '';
    }
}

// Function call to initialize app
init();
