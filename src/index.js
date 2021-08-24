function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
<<<<<<< HEAD

  let str = expr.replace( /\s/g, "");
  return new Function(`return ${str}`)();
=======
    // write your solution here
    let str = expr.replace(/\s/g,'');
    return new Function(`rerurn ${str}`)();
>>>>>>> 21a6983404e0d3b2b0d274532b58825b823329e2
}

module.exports = {
    expressionCalculator
}
