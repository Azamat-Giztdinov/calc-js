const Operation = require('./operation');

class Multiplication extends Operation {
    execute(a, b) {
        return a * b;
    }
}

module.exports = Multiplication;
