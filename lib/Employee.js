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
    <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.getRole()}</h5>
      <h6 class="card-subtitle mb-2">${this.getName()}</h6>
      <p class="card-text">
      <span>Employee ID: ${this.id}</span><br>
      <span><a href="mailto:${this.email}">Email: ${this.email}</a></span><br>
      <span>Office Number: ${this.officeNumber}</span>      
      </p>
      
    </div>
    </div>
    </div>
    
    
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
    <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.getRole()}</h5>
      <h6 class="card-subtitle mb-2">${this.getName()}</h6>
      <p class="card-text">
      <span>Employee ID: ${this.id}</span><br>
      <span><a href="mailto:${this.email}">Email: ${this.email}</a></span><br>
      <span>User Github: ${this.githubUsername}</span>      
      </p>
    </div>  
    </div>
    </div>
    
    
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
    <div class="col-sm">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.getRole()}</h5>
      <h6 class="card-subtitle mb-2">${this.getName()}</h6>
      <p class="card-text">
      <span>Employee ID: ${this.id}</span><br>
      <span><a href="mailto:${this.email}">Email: ${this.email}</a></span><br>
      <span>User School: ${this.school}</span>      
      </p>
      
    </div>
    </div>
    </div>

    
    `;
  }
}

module.exports = {
  Employee: Employee,
  Manager: Manager,
  Engineer: Engineer,
  Intern: Intern,
};
