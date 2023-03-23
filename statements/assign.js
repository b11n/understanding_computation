const DoNothing = require("./doNothing");

const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
  
module.exports = class Assign {
    name = null;
    expression = null;
    constructor(name, expression) {
        this.name = name;
        this.expression = expression;
    }
  
    [customInspectSymbol](depth, inspectOptions, inspect) {
      return `<<${this}>>`;
    }
  
    toString() {
      return `${this.name} = ${this.expression}`;
    }

    reducible() {
      return true;
    }

    reduce(env) {
        if(this.expression.reducible()){
            return new Assign(this.name, this.expression.reduce(env))
        }else {
            env.merge(this.name, this.expression);
            return new DoNothing();
        }
    }
  }