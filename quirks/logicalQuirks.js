console.log(0 && true); // 0
console.log(0 || true); // true
console.log(0 || false); // false
console.log(0 && false); // 0
console.log(1 && true); // true
console.log(1 || true); // 1
console.log(1 || false); // 1
console.log(1 && false); // false - WHAT? - one passes then false is returned
console.log(1 && 0); // 0
console.log(1 || 0); // 1
console.log(0 && 1); // 0
console.log(0 || 1); // 1
console.log(0 && 0); // 0
console.log(0 || 0); // 0
console.log(1 && 1); // 1
console.log(1 || 1); // 1
console.log(1 && 2); // 2
console.log(1 || 2); // 1
console.log(2 && 1); // 1
console.log(2 || 1); // 2
console.log(2 && 2); // 2
console.log(2 || 2); // 2
console.log(2 && 0); // 0
console.log(2 || 0); // 2

console.log(true && 0); // 0
console.log(false && true); // false
console.log(true && false); // false
console.log(true && ""); // ''
