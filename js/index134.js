let numbers = [43, 324, 56, 76, 123, 45, 4];
sum = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(sum += numbers[i])
    if (sum === 500500) {
        console.log('Good job')
    }
};