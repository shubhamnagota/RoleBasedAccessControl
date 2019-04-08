const Role = require("../models/Role");
const rolesData = [
  {
    roleName: "ADMIN",
    resources: [
      {
        resourceName: "DATABASE",
        actionsAllowed: ["WRITE", "READ", "DELETE", "COMMIT"]
      },
      {
        resourceName: "ACTIVE_DIRECTORY",
        actionsAllowed: ["WRITE", "READ", "DELETE", "COMMIT"]
      },
      {
        resourceName: "IDM",
        actionsAllowed: ["WRITE", "READ", "DELETE", "COMMIT"]
      },
      {
        resourceName: "MAIL_SERVER",
        actionsAllowed: ["WRITE", "READ", "DELETE", "COMMIT"]
      }
    ]
  },
  {
    roleName: "EMPLOYEE",
    resources: [
      {
        resourceName: "DATABASE",
        actionsAllowed: ["WRITE", "READ", "DELETE"]
      },
      {
        resourceName: "ACTIVE_DIRECTORY",
        actionsAllowed: ["READ"]
      },
      {
        resourceName: "IDM",
        actionsAllowed: ["WRITE", "READ"]
      }
    ]
  },
  {
    roleName: "CLIENT_USER",
    resources: [
      {
        resourceName: "DATABASE",
        actionsAllowed: ["READ"]
      },
      {
        resourceName: "IDM",
        actionsAllowed: ["READ"]
      }
    ]
  }
];

let roles = [];
rolesData.forEach(roleObject => {
  let role = new Role(roleObject.roleName, roleObject.resources);
  roles.push(role);
});

module.exports = roles;
