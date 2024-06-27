/**
 * A factory function is a function that returns another function.
 * */
function calculateTax(tax) {
  return function (amount) {
    return amount * tax;
  };
}

let calculateVAT = calculateTax(0.15);
let calculateIncomeTax = calculateTax(0.2);

console.log(calculateVAT(100000));
console.log(calculateIncomeTax(10000));
