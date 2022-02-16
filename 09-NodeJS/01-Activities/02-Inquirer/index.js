const fs = require('fs');
const inquirer = require ('inquirer');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'rawlist',
        name: 'connect',
        message: 'What is your preferred method of communication?',
        choices: ['email', 'phone', 'mail']
      },
    ]);
  };
  promptUser()
  .then(answers => {
      let answerName= `answers.json`
     

  fs.writeFile(answerName,JSON.stringify(answers, null, '\t')  , err => {
    if (err) throw err;
  
    console.log("Page Created! Check out index.html to see the output!")
  });
})