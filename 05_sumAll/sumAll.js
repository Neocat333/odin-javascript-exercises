// Implement a function that takes 2 integers and returns the sum of every number
// between(and including) them:

const sumAll = function (start, end) {
    sum = 0
    while (start <= end) {
        sum += start
        start++
    }
    return sum
}

// console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll
