sum = 0;
for (i = 0; i <= 1000; i++) {
    sum += i;
    if (sum > 400) {
        break;
    } else {
        console.log(sum)
    }
};