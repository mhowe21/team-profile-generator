const inquirer = require("inquirer");
const Employee = require("./Employee");
let htmlString = ``;

const employeeQuestions = [
  {
    type: "list",
    name: "employeeType",
    message: "Enter employee type",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
  },
  {
    type: "input",
    name: "employeeName",
    message: "Enter employee name",
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter employee ID",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "Enter employee Email",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message: "Enter Manager Office Number",
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "githubUsername",
    message: "Enter User's Github Username",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "School",
    message: "Enter user's School",
  },
];
const addAnother = [
  {
    type: "list",
    name: "keepGoing",
    message: "Would you like to add another user?",
    choices: ["Yes", "No"],
  },
];

function getInfo() {
  employeePrompts(employeeQuestions);
}

function employeePrompts(question) {
  inquirer.prompt(question).then(async function (anwsers) {
    if (anwsers.employeeType == "Manager") {
      let addtionalInfo = await addtionalPrompts(managerQuestions);
      let obj = { ...anwsers, ...addtionalInfo };
      let { employeeName, employeeID, employeeEmail, officeNumber } = obj;
      let newEmployee = new Employee.Manager(
        employeeName,
        employeeID,
        employeeEmail,
        officeNumber
      );
      htmlString = htmlString + newEmployee.genHTML();
    } else if (anwsers.employeeType == "Engineer") {
      let addtionalInfo = await addtionalPrompts(engineerQuestions);
      let obj = { ...anwsers, ...addtionalInfo };
      let { employeeName, employeeID, employeeEmail, githubUsername } = obj;
      let newEmployee = new Employee.Engineer(
        employeeName,
        employeeID,
        employeeEmail,
        githubUsername
      );
      htmlString = htmlString + newEmployee.genHTML();
    } else if (anwsers.employeeType == "Intern") {
      let addtionalInfo = await addtionalPrompts(internQuestions);
      let obj = { ...anwsers, ...addtionalInfo };
      let { employeeName, employeeID, employeeEmail, School } = obj;
      let newEmployee = new Employee.Intern(
        employeeName,
        employeeID,
        employeeEmail,
        School
      );
      htmlString = htmlString + newEmployee.genHTML();
    } else {
      console.log("exit");
    }
  });

  function addtionalPrompts(question) {
    return new Promise((resolve, reject) => {
      inquirer.prompt(question).then((anwsers) => {
        resolve(anwsers);
        another(addAnother);
      });
    });
  }

  function another(question) {
    inquirer.prompt(question).then((anwsers) => {
      if (anwsers.keepGoing == "Yes") {
        employeePrompts(employeeQuestions);
      } else {
        console.log(htmlString);
      }
    });
  }
}

module.exports = getInfo;
