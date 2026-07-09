const thriple = multiplyBy(3)
const double = multiplyBy(2)

function multiplyBy(num) {
    return function (value) {
        return value * num
    }
}

console.log(double(10))
console.log(thriple(20))