const importClasses = require("../lib/Employee");

test("Test Intern Class", () => {
  const Intern = new importClasses.Intern(
    "mason",
    20,
    "masonhowe@example.com",
    "University of Utah"
  );

  expect(Intern.getRole()).toBe("Intern");
  expect(typeof Intern.getEmail()).toBe("string");
  expect(Intern.genHTML()).not.toBeNull();
});
