export default class Calculator {
    constructor(parser, evaluator) {
        this.parser = parser;
        this.evaluator = evaluator;
    }

    calculate(expression) {
        const tokens = this.parser.parse(expression);
        return this.evaluator.evaluate(tokens);
    }
}
