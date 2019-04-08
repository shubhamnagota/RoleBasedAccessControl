module.exports = class User {
  constructor(userName, roles = []) {
    this.name = userName;
    this.roles = roles;
  }
  set name(name) {
    this._name = name;
  }
  set roles(roles) {
    this._roles = roles;
  }
  get name() {
    return this._name;
  }
  get roles() {
    return this._roles;
  }
};
