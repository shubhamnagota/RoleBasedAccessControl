module.exports = class Role {
  constructor(roleName, resources = []) {
    this.name = roleName;
    this.resources = resources;
  }
  set name(name) {
    this._name = name;
  }
  set resources(resources) {
    this._resources = resources;
  }
  get name() {
    return this._name;
  }
  get resources() {
    return this._resources;
  }
};
