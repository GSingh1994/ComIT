let number = 1;
let i = 1;
let sum;

do {
    sum = number += i;
    i += 2
}
while (i < 1000)

console.log(sum);