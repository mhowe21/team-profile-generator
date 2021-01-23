class Employee {
  constructor(employeeName, id, email) {
    this.employeeName = employeeName;
    this.email = email;
    this.id = id;
  }
  getName() {
    return this.employeeName;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(employeeName, id, email, officeNumber) {
    super(employeeName, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  genHTML() {
    return `
    <p>${this.getRole()}</p>
    <p>${this.employeeName}</p>
    <p>${this.id}</p>
    <p>Email: ${this.email}</p>
    <p>${this.officeNumber}</p>
    
    `;
  }
}

class Engineer extends Employee {
  constructor(employeeName, id, email, githubUsername) {
    super(employeeName, id, email);
    this.githubUsername = githubUsername;
  }
  getGithub() {
    return this.githubUsername;
  }
  getRole() {
    return "Engineer";
  }
  genHTML() {
    return `
    <p>${this.getRole()}</p>
    <p>${this.employeeName}</p>
    <p>${this.id}</p>
    <p>Email: ${this.email}</p>
    <p>${this.githubUsername}</p>
    
    `;
  }
}

class Intern extends Employee {
  constructor(employeeName, id, email, school) {
    super(employeeName, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  genHTML() {
    return `
    <p>${this.getRole()}</p>
    <p>${this.employeeName}</p>
    <p>${this.id}</p>
    <p>Email: ${this.email}</p>
    <p>${this.school}</p>
    
    `;
  }
}

module.exports = {
  Employee: Employee,
  Manager: Manager,
  Engineer: Engineer,
  Intern: Intern,
};
