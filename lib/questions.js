const employeeQuestions = [
  {
    type: "list",
    name: "employeeType",
    message: "Enter employee type",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
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
    name: "school",
    message: "Enter user's School",
  },
];

module.exports = {
    employeeQuestions: employeeQuestions,
    managerQuestions: managerQuestions,
    engineerQuestions: engineerQuestions,
    internQuestions: internQuestions,
}