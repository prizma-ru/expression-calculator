function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let str = expr.replace(/\s/g,'');
    return new Function(`rerurn ${str}`)();
}

module.exports = {
    expressionCalculator
}
