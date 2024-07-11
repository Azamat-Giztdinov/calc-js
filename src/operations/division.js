const Operation = require('./operation');

class Division extends Operation {
    execute(a, b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }
}

module.exports = Division;
