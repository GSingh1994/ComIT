function even(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`)
        return true;
    } else {
        console.log(`${num} is odd`)
        return false;
    }
};

even(5)