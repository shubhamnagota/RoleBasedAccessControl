const User = require("../models/User");
const usersData = [
  {
    name: "Adam",
    roles: ["ADMIN", "EMPLOYEE"]
  },

  {
    name: "Justin",
    roles: ["ADMIN", "EMPLOYEE"]
  },
  {
    name: "Robert",
    roles: ["EMPLOYEE"]
  },
  { name: "Mike", roles: ["CLIENT_USER"] }
];

let users = [];
usersData.forEach(userObject => {
  let user = new User(userObject.name, userObject.roles);
  users.push(user);
});

module.exports = users;
