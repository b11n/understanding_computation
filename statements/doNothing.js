const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
  
module.exports = class DoNothing {
  
    [customInspectSymbol](depth, inspectOptions, inspect) {
      return `<<${this}>>`;
    }
  
    toString() {
      return `DO_NOTHING`;
    }

    reducible() {
      return false;
    }
  }