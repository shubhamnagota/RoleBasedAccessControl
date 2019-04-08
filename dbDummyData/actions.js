const Action = require("../models/Action");
const actionsData = ["WRITE", "READ", "DELETE"];
let actions = [];
actionsData.forEach(actionName => {
  let action = new Action(actionName);
  actions.push(action);
});

module.exports = actions;
