module.exports = class Action {
  constructor(name) {
    this.name = name;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
};
