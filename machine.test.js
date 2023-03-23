const Environment = require('./environment/environment');
const Machine = require('./machine');
const Multiply = require('./operators/multiply');
const Number = require('./datatypes/number');
const Add = require('./operators/add');
const LessThan = require('./operators/lessThan');
const Variable = require('./environment/variable');
const Assign = require('./statements/assign');

let env = new Environment();
env.set("x", new Number(10));
let var1 = new Variable("x");


test('Should reduce an expression to correct form', () => {
  // <<1 * 2 + 3 * 4>>
  let expression = new Add(new Multiply(new Number(1), new Number(2)),new Multiply(new Number(3), new Number(4)));
  expect(new Machine(expression).run(env)).toBe(14);
});

test('Should reduce an expression with variable to correct form', () => {
    // <<x < 2 + 3>>
    let expression2 = new LessThan(var1, new Add(new Number(2),new Number(3)));
    expect(new Machine(expression2).run(env)).toBe(false);
});


test('Should reduce an expression with variable to correct form', () => {
    // <<x < 2 + 3>>
    let statement = new Assign(var1, new Add(var1, new Number(10)))
    new Machine(statement).run(env);
    expect(env.get("x").value).toBe(20);
});