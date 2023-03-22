const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
  
module.exports = class Boolean {
    value = null;
    constructor(bool) {
      this.value = bool;
    }
  
    [customInspectSymbol](depth, inspectOptions, inspect) {
      return `<<${this}>>`;
    }
  
    toString() {
      return `${this.value ? 'true' : 'false' }`;
    }

    reducible() {
      return false;
    }
  }
  