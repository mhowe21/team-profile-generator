const importClasses = require("../lib/Employee");

test("test manager class", () => {
  let manager1 = new importClasses.Manager(
    "Mason",
    20,
    "mason.a.howe@example.com"
  );

  expect(typeof manager1.getEmail()).toBe("string");
  expect(manager1.getEmail()).toBe("mason.a.howe@example.com");

  expect(manager1.getRole()).toBe("Manager");
  expect(manager1.genHTML()).not.toBeNull();
});
