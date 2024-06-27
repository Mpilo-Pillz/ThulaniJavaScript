/**
 * Primitive types are pass by value
 * Symbol, Number, String, Boolean, undefined, null
 * If you pass a primitive variable from one function to another, it will create a new copy of the variable
 * If you pass a variable to a function, changes to it do not affect the original variable
 */

let num = 10;

function changeNum(num) {
  num = 20;
}
changeNum(num);
console.log(num); // 10

/**
 * Pass by Reference
 * Reference types are pass by reference
 * REference Types are Arrays, Objects, Functions
 */

let obj = { value: 10 };

function changeObj(a) {
  a.value = 20;
}
console.log(obj.value); // 10
changeObj(obj);
console.log(obj.value); // 20
