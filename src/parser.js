class Parser {
    parse(expression) {
        const regex = /\d+(\.\d+)?|[\+\-\*\/\(\)]/g;
        return expression.match(regex).map(token => 
            isNaN(token) ? token : parseFloat(token)
        );
    }
}

export default Parser;
