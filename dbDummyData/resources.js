const Resource = require("../models/Resource");
const resourcesData = ["DATABASE", "ACTIVE_DIRECTORY", "IDM", "MAIL_SERVER"];

let resources = [];
resourcesData.forEach(resourceName => {
  let resource = new Resource(resourceName);
  resources.push(resource);
});

module.exports = resources;
