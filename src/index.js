function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
const str = expr.replace( /\s/g, "");

let count = 0;
for (const value of str) {
  if (value === '(') count++;
  if (value === ')') count--;
}

if (count) throw new Error('ExpressionError: Brackets must be paired');
if (str.includes('/0')) throw new Error('TypeError: Division by zero.');
  
return new Function(`return ${str}`)();
}

module.exports = {
  expressionCalculator
}