function calculateRightAngle(a, b, c) {
    return (a * a) + (b * b) === (c * c)
}

console.log(calculateRightAngle(3, 4, 5))


const multiply = (b, c) => b * c;

// const square = (a) => a * a;
const square = (a) => multiply(a, a);

const isRightAngle = (a, b, c) => square(a) + square(b) === square(c);
console.log(isRightAngle(3, 4, 5))
console.log(isRightAngle(6, 8, 10))
console.log(isRightAngle(1, 2, 3))
console.log("=================Tax=============")

const calculateTax = (tax) => (amount) => multiply(tax, amount)

calculateVAT = calculateTax(0.15)
calculateIncomeTax = calculateTax(0.45)
console.log("VAT is ", calculateVAT(1000000));
console.log("Income tax is ", calculateIncomeTax(120000));