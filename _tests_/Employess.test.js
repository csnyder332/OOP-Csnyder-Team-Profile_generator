const Employee = require("../lib/Employee");

describe("employee", () => {
  it("should create an employee object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
});

describe("name", () => {
  it("should set the name via constructor argument", () => {
    const name = "Chris";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
});
describe("id", () => {
  it("should set the id via constructor argument", () => {
    const id = "1";
    const employee = new Employee("Chris", id);
    expect(employee.id).toBe(id);
  });
});
describe("email", () => {
  it("should set the email via constructor argument", () => {
    const email = "c@test.com";
    const employee = new Employee("Chris", "1", email);
    expect(employee.email).toBe(email);
  });
});