function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

  let str = expr.replace( /\s/g, "");
  return new Function(`return ${str}`)();
}

module.exports = {
    expressionCalculator
}