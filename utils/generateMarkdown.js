// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return 'https://opensource.org/licenses/MIT';
    case 'GNU GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
    case 'ISC':
        return 'https://opensource.org/licenses/ISC';
    default:
        return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None' || !license) {
    return 'This project is not covered under a license.'
  }
  return `This project is covered under the ${license} license.`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
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
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Tests
  ${data.test}
  
  ## Questions
  
  ### Github
  [Github Page](https://www.github.com/${data.github})
  
  ### Contact
  Reach out to ${data.email} if there are any questions.
      `;
}

export default generateMarkdown;
