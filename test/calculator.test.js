import { expect } from 'chai';
import Calculator from '../src/calculator.js';
import Parser from '../src/parser.js';
import Evaluator from '../src/evaluator.js';


describe('Calculator', () => {
    let calculator;

    before(() => {
        calculator = new Calculator(new Parser(), new Evaluator());
    });

    it('should add two numbers', () => {
        expect(calculator.calculate('1 + 2')).to.equal(3);
    });

    it('should subtract two numbers', () => {
        expect(calculator.calculate('5 - 2')).to.equal(3);
    });

    it('should multiply two numbers', () => {
        expect(calculator.calculate('2 * 3')).to.equal(6);
    });

    it('should divide two numbers', () => {
        expect(calculator.calculate('6 / 2')).to.equal(3);
    });

    it('should handle parentheses', () => {
        expect(calculator.calculate('(2 + 3) * 4')).to.equal(20);
    });

    it('should handle complex expressions', () => {
        expect(calculator.calculate('2 + 3 * 4 - 5')).to.equal(9);
    });

    it('should throw an error for division by zero', () => {
        expect(() => calculator.calculate('1 / 0')).to.throw('Division by zero');
    });
});
