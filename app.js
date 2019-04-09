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

checkRoleBasedAccess = (user, v_action, v_resource, callback) => {
  let access = false;
  user._roles.forEach(roleName => {
    let role = findRole(roleName);
    role._resources.forEach(resource => {
      if (
        resource.resourceName.toUpperCase() === v_resource._name.toUpperCase()
      ) {
        resource.actionsAllowed.find(action => {
          if (action === v_action._name) {
            access = true;
            return callback(null, true);
          }
        });
      }
    });
  });
  access ? "" : callback(true, null);
};

checkAccess = (inputData, callback) => {
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

  checkRoleBasedAccess(
    userNameCheck,
    actionCheck,
    resourceCheck,
    (err, success) => {
      callback(success ? "\nAuthorized\n" : "\nNot Authorized\n");
      return;
    }
  );
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
      checkAccess(answer, output => console.log(output));
      waitForUserInput();
    }
  });
};
waitForUserInput();
