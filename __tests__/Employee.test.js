const importClasses = require("../lib/Employee");

test("Run Employee test", () => {
  let e1 = new importClasses.Employee("Mason", 20, "mason.a.howe@gmail.com");

  // check data types
  expect(typeof e1.getEmail()).toBe("string");
  expect(e1.getEmail()).toBe("mason.a.howe@gmail.com");

  //check employee return
  expect(e1.getRole()).toBe("Employee");
});
