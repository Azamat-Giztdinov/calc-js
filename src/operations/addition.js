const Operation = require('./operation');

class Addition extends Operation {
    execute(a, b) {
        return a + b;
    }
}

module.exports = Addition;
