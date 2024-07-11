const readline = require('readline');
const Calculator = require('./src/calculator');
const Addition = require('./src/operations/addition');
const Subtraction = require('./src/operations/subtraction');
const Multiplication = require('./src/operations/multiplication');
const Division = require('./src/operations/division');

const calculator = new Calculator();
calculator.addOperation('+', new Addition());
calculator.addOperation('-', new Subtraction());
calculator.addOperation('*', new Multiplication());
calculator.addOperation('/', new Division());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('Enter an expression: ');
rl.prompt();

rl.on('line', (line) => {
    try {
        const result = calculator.evaluate(line.trim());
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
    rl.prompt();
}).on('close', () => {
    console.log('Calculator closed.');
    process.exit(0);
});
