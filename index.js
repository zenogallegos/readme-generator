// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkDown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const projectInfo = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of your project:"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose of your Project (1-2 paragraphs):"
    },
    {
        type: "input",
        name: "media",
        message: "provide the path to the image/video you wish to use:"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the steps on how to install and/or run the application/program:"
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how to use the application/program:"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select the a license applicable for the project:",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "None"]
    },
    {
        type: "input",
        name: "contributors",
        message: "List any contributors with their respective roles (use GitHub usernames):"
    },
    {
        type: "input",
        name: "test",
        message: "If applicable, provide a walkthrough of required tests:"
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide appropriate contact information for users:"
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(projectInfo).then((res) => {
        console.log('Generating README.md file...');
        writeToFile('./dist/README.md', generateMarkDown(res))
    });
}

// Function call to initialize app
init();
