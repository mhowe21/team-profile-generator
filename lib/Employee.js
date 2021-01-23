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
}

module.exports = {
  Employee: Employee,
  Manager: Manager,
};
