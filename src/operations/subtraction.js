const Operation = require('./operation');

class Subtraction extends Operation {
    execute(a, b) {
        return a - b;
    }
}

module.exports = Subtraction;
