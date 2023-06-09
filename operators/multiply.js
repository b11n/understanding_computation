const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
const Number = require('../datatypes/number');

module.exports = class Multiply {
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
    return `${this.left} * ${this.right}`;
  }

  reducible() {
    return true;
  }

  reduce(environment) {
    if (this.left.reducible()) {
      return new Multiply(this.left.reduce(environment), this.right);
    } else if (this.right.reducible()) {
      return new Multiply(this.left, this.right.reduce(environment));
    } else {
      return new Number(this.left.value * this.right.value);
    }
  }
}
