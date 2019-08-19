function biggerNumber(firstNumber, secondNumber) {
    if (typeof firstNumber != 'number' && typeof secondNumber != 'number') {
        console.log(`Please enter a valid number`)
    } else if (firstNumber > secondNumber) {
        console.log(`${firstNumber} is bigger than ${secondNumber}`)
    } else if (secondNumber > firstNumber) {
        console.log(`${secondNumber} is bigger than ${firstNumber}`)
    } else if (firstNumber === secondNumber) {
        console.log(`both numbers are ${firstNumber}`)
    }
};

biggerNumber(6, 5);
biggerNumber(2, 2);