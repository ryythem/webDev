/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a) {
    this.result += a;
  }

  subtract(a) {
    this.result -= a;
  }

  multiply(a) {
    this.result *= a;
  }

  divide(a) {
    if (a === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= a;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove extra spaces and validate input
    expression = expression.replace(/\s+/g, "").trim();

    if (!/^[0-9+\-*/().]*$/.test(expression)) {
      throw new Error("Invalid characters in the expression");
    }

    try {
      // Evaluate the expression
      this.result = eval(expression);

      // Check for division by zero explicitly (eval will return Infinity or -Infinity)
      if (this.result === Infinity || this.result === -Infinity) {
        throw new Error("Cannot divide by zero");
      }

      return this.result;
    } catch (e) {
      throw new Error("Error in evaluating the expression");
    }
  }
}

module.exports = Calculator;
