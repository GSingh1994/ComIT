sumOfEven = 0;
for (i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        sumOfEven += i;
        console.log(sumOfEven)
    } else if (i > 40) {
        break
    }
};
