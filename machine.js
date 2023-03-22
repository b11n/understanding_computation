module.exports = class Machine { 
    expression = null;
    constructor(expression) {
        this.expression = expression;
    }

    run(environemnt) {
        while(this.expression.reducible()){
            console.log(this.expression);
            this.expression = this.expression.reduce(environemnt);
        }
        return this.expression.value;
    }
}