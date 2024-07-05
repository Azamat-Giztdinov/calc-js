export default class Subtraction {
    constructor() {
        this.precedence = 1;
    }

    execute(a, b) {
        return a - b;
    }
}