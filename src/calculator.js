class Calculator {
    constructor() {
        this.operations = {};
    }

    addOperation(name, operation) {
        this.operations[name] = operation;
    }

    executeOperation(name, a, b) {
        if (!this.operations[name]) {
            throw new Error(`Operation ${name} not supported`);
        }
        return this.operations[name].execute(a, b);
    }

    evaluate(expression) {
        const tokens = this.tokenize(expression);
        const rpn = this.toRPN(tokens);
        return this.computeRPN(rpn);
    }

    tokenize(expression) {
        const regex = /(\d+\.?\d*)|([+\-*/()])/g;
        let tokens = [];
        let match;
        while ((match = regex.exec(expression)) !== null) {
            if (match[1]) {
                tokens.push(parseFloat(match[1]));
            } else {
                tokens.push(match[2]);
            }
        }
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === '-' && (i === 0 || ['+', '-', '*', '/', '('].includes(tokens[i - 1]))) {
                tokens.splice(i, 2, -tokens[i + 1]);
            }
        }

        return tokens;
    }

    toRPN(tokens) {
        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };
        const output = [];
        const operators = [];

        tokens.forEach(token => {
            if (typeof token === 'number') {
                output.push(token);
            } else if (token === '(') {
                operators.push(token);
            } else if (token === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    output.push(operators.pop());
                }
                operators.pop();
            } else {
                while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
                    output.push(operators.pop());
                }
                operators.push(token);
            }
        });

        while (operators.length) {
            output.push(operators.pop());
        }

        return output;
    }

    computeRPN(rpn) {
        const stack = [];

        rpn.forEach(token => {
            if (typeof token === 'number') {
                stack.push(token);
            } else {
                const b = stack.pop();
                const a = stack.pop();
                const result = this.executeOperation(token, a, b);
                stack.push(result);
            }
        });

        return stack.pop();
    }
}

module.exports = Calculator;
