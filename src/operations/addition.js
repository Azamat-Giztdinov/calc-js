export default class Addition {
    constructor() {
        this.precedence = 1;
    }

    execute(a, b) {
        return a + b;
    }
}
