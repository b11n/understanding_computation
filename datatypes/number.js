const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
  
module.exports = class Number {
    value = null;
    constructor(num) {
      this.value = num;
    }
  
    [customInspectSymbol](depth, inspectOptions, inspect) {
      return `<<${this}>>`;
    }
  
    toString() {
      return `${this.value}`;
    }

    reducible() {
      return false;
    }
  }
  