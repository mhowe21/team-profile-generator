const Employee = require("./lib/Employee");
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./lib/questions");




prompts();

function prompts() {

    let data;
  inquirer.prompt(questions.employeeQuestions).then((anwsers) => {
      console.log(anwsers.employeeType);
    if(anwsers.employeeType == "Manager"){
        inquirer.prompt(questions.managerQuestions)
    }else if(anwsers.employeeType == "Engineer"){
        inquirer.prompt(questions.engineerQuestions);
    }else if(anwsers.employeeType == "Intern"){
        inquirer.prompt(questions.internQuestions);
    }else{};
    
  });
}
