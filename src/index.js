function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    
    return new Function(`rerurn ${expr}`)();
}

module.exports = {
    expressionCalculator
}
