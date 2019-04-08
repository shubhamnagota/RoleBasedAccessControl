// Import Data
const actions = require("../dbDummyData/actions");
const roles = require("../dbDummyData/roles");
const resources = require("../dbDummyData/resources");
const users = require("../dbDummyData/users");

printData = () => {
  console.log("\n-----Actions---------->");
  actions.forEach(action => console.log(action._name));

  console.log("\n-----Roles---------->");
  roles.forEach(role => console.log(role._name));

  console.log("\n-----Resources---------->");
  resources.forEach(resource => console.log(resource._name));

  console.log("\n-----Users---------->");
  users.forEach(user => console.log(user._name));
};

checkUser = userName => {
  return users.filter(
    user => user._name.toUpperCase() === userName.toUpperCase()
  )[0];
};

checkAction = actionName => {
  return actions.filter(
    action => action._name.toUpperCase() === actionName.toUpperCase()
  )[0];
};

checkResource = resourceName => {
  return resources.filter(
    resource => resource._name.toUpperCase() === resourceName.toUpperCase()
  )[0];
};

findRole = roleName => {
  return roles.find(role => role._name === roleName);
};

module.exports = {
  printData,
  checkUser,
  checkAction,
  checkResource,
  findRole
};
