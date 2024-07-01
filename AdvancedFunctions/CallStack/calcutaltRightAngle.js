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