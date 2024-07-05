import Calculator from './src/calculator.js';
import Parser from './src/parser.js';
import Evaluator from './src/evaluator.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator(new Parser(), new Evaluator());

rl.question('Enter an expression: ', (expression) => {
    try {
        const result = calculator.calculate(expression);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        rl.close();
    }
});
