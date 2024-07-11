const assert = require('assert');
const Calculator = require('../src/calculator');
const Addition = require('../src/operations/addition');
const Subtraction = require('../src/operations/subtraction');
const Multiplication = require('../src/operations/multiplication');
const Division = require('../src/operations/division');

describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator();
        calculator.addOperation('+', new Addition());
        calculator.addOperation('-', new Subtraction());
        calculator.addOperation('*', new Multiplication());
        calculator.addOperation('/', new Division());
    });

    it('should add two numbers', function() {
        assert.strictEqual(calculator.executeOperation('+', 1, 1), 2);
    });

    it('should subtract two numbers', function() {
        assert.strictEqual(calculator.executeOperation('-', 2, 1), 1);
    });

    it('should multiply two numbers', function() {
        assert.strictEqual(calculator.executeOperation('*', 2, 2), 4);
    });

    it('should divide two numbers', function() {
        assert.strictEqual(calculator.executeOperation('/', 4, 2), 2);
    });

    it('should throw an error when dividing by zero', function() {
        assert.throws(() => {
            calculator.executeOperation('/', 4, 0);
        }, Error, 'Division by zero');
    });

    it('should evaluate a complex expression', function() {
        assert.strictEqual(calculator.evaluate('1 + 2 * 3 - 4 / 2'), 5);
    });

    it('should handle parentheses correctly', function() {
        assert.strictEqual(calculator.evaluate('(1 + 2) * (3 - 4) / 2'), -1.5);
    });

    it('should support negative numbers', function() {
        assert.strictEqual(calculator.evaluate('-1 + 2'), 1);
    });
});
