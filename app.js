// Import modules
const readline = require("readline");

// Import functions
const {
  printData,
  checkUser,
  checkAction,
  checkResource,
  findRole
} = require("./extras/utils");

checkRoleBasedAccess = (user, v_action, v_resource) => {
  let access = false;
  user._roles.forEach(roleName => {
    if (access === true) return access;
    let role = findRole(roleName);
    if (access === true) return access;
    role._resources.forEach(resource => {
      if (access === true) return access;
      if (
        resource.resourceName.toUpperCase() === v_resource._name.toUpperCase()
      ) {
        resource.actionsAllowed.find(action => {
          if (action === v_action._name) access = true;
        });
      }
    });
  });
  return access;
};

checkAccess = inputData => {
  let inputArray = inputData.split(" ");
  if (inputArray.length !== 3) return "Wrong inputs given\n";
  let [username, actionType, resourceName] = inputArray;
  console.log("Inputs Given", username, actionType, resourceName);

  let userNameCheck = checkUser(username);
  if (!userNameCheck) return "User not found.\n";
  let actionCheck = checkAction(actionType);
  if (!actionCheck) return "Action not found.\n";
  let resourceCheck = checkResource(resourceName);
  if (!resourceCheck) return "Resource not found.\n";

  return checkRoleBasedAccess(userNameCheck, actionCheck, resourceCheck)
    ? "\nAuthorized\n"
    : "\nNot Authorized\n";
};

printData();

console.log("\n----->Type 'exit' to quit.<----------\n");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var waitForUserInput = function() {
  rl.question("Enter usename action resource : ", function(answer) {
    if (answer == "exit") {
      rl.close();
    } else {
      console.log(checkAccess(answer));
      waitForUserInput();
    }
  });
};
waitForUserInput();
