const generateHTML = require("./src/generateHTML");
// packages needed for the application
const inquirer = require("inquirer");
const fs = require("fs");
//employee profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];
//prompts for creating team
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Manager name",
        name: "name",
      },
      {
        type: "input",
        message: "Manager ID number",
        name: "id",
      },
      {
        type: "input",
        message: "Manager email address",
        name: "email",
      },
      {
        type: "input",
        message: "Manager office number",
        name: "officeNumber",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message:
          "Add employees?",
        choices: ["Engineer", "Intern"],
        name: "role",
      },
      {
        type: "input",
        message: "Employee name",
        name: "name",
      },
      {
        type: "input",
        message: "Employee ID number",
        name: "id",
      },
      {
        type: "input",
        message: "Employee email address",
        name: "email",
      },
      {
        type: "input",
        message: "Employee GitHub username",
        when: (input) => input.role === "Engineer",
        name: "github",
      },
      {
        type: "input",
        message: "Employee school name",
        when: (input) => input.role === "Intern",
        name: "school",
      },
      {
        type: "confirm",
        message: "Would you like to add more employees?",
        default: false,
        name: "confirmEmployee",
      },
    ])

    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }
      teamArray.push(employee);

      if (confirmEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};
//function to write the HTML
//writeFileSync
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Employee list generated!");
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });