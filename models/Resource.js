module.exports = class Resource {
  constructor(resourceName) {
    this.name = resourceName;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
};
