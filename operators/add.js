const util = require('node:util');

const customInspectSymbol = util.inspect.custom;
const Number = require('../datatypes/number');

module.exports = class Add {
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
    return `${this.left} + ${this.right}`;
  }

  reducible() {
    return true;
  }

  reduce(environment) {
    if (this.left.reducible()) {
      return new Add(this.left.reduce(environment), this.right);
    } else if (this.right.reducible()) {
      return new Add(this.left, this.right.reduce(environment));
    } else {
      return new Number(this.left.value + this.right.value);
    }
  }
}