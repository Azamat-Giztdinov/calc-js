import Addition from './operations/addition.js';
import Subtraction from './operations/subtraction.js';
import Multiplication from './operations/multiplication.js';
import Division from './operations/division.js';

class Evaluator {
    constructor() {
        this.operations = {
            '+': new Addition(),
            '-': new Subtraction(),
            '*': new Multiplication(),
            '/': new Division()
        };
    }

    evaluate(tokens) {
        let outputQueue = [];
        let operatorStack = [];

        tokens.forEach(token => {
            if (typeof token === 'number') {
                outputQueue.push(token);
            } else if (this.operations[token]) {
                while (
                    operatorStack.length &&
                    this.operations[operatorStack[operatorStack.length - 1]] &&
                    this.operations[operatorStack[operatorStack.length - 1]].precedence >= this.operations[token].precedence
                ) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.pop();
            }
        });

        while (operatorStack.length) {
            outputQueue.push(operatorStack.pop());
        }

        let stack = [];

        outputQueue.forEach(token => {
            if (typeof token === 'number') {
                stack.push(token);
            } else if (this.operations[token]) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(this.operations[token].execute(a, b));
            }
        });

        return stack[0];
    }
}

export default Evaluator;
