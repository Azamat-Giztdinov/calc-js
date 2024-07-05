export default class Division {
    constructor() {
        this.precedence = 2;
    }

    execute(a, b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }
}
