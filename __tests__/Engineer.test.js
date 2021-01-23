const importClasses = require("../lib/Employee");

test("Test Engineer Class", () => {
  const eng = new importClasses.Engineer(
    "mason",
    20,
    "mason@super.example.net"
  );

  expect(eng.getRole()).toBe("Engineer");
});

