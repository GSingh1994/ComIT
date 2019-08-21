let numbers = [34, 46, 767, 323, 45, 56, 5];

let evenNum = numbers.filter(function (num) {
    return num % 2 === 0
});

let oddNum = numbers.filter(function (num) {
    return num % 2 !== 0
});

console.log(evenNum);
console.log(oddNum);