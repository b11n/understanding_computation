const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
  
module.exports = class Variable {
    value = null;
    constructor(val) {
      this.value = val;
    }
  
    [customInspectSymbol](depth, inspectOptions, inspect) {
      return `<<${this}>>`;
    }
  
    toString() {
      return `${this.value}`;
    }

    reduce(environment){
        return environment.get(this.value);
    }

    reducible() {
      return true;
    }
  }