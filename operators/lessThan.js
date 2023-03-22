const util = require('node:util');

const customInspectSymbol = util.inspect.custom;
const Boolean = require('../datatypes/boolean');

module.exports = class LessThan {
  left = null;
  right = null;
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  [customInspectSymbol](depth, inspectOptions, inspect) {
    return `<<${this}>>`;
  }

  toString() {
    return `${this.left} < ${this.right}`;
  }

  reducible() {
    return true;
  }

  reduce(environment) {
    if (this.left.reducible()) {
      return new LessThan(this.left.reduce(environment), this.right);
    } else if (this.right.reducible()) {
      return new LessThan(this.left, this.right.reduce(environment));
    } else {
      return new Boolean(this.left.value < this.right.value);
    }
  }
}