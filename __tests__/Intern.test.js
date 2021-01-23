const importClasses = require("../lib/Employee");


test("Test Intern Class", () =>{
    const Intern = new importClasses.Intern("mason",20,"masonhowe@msn.com", "University of Utah");

    expect(Intern.getRole()).toBe()
    
});