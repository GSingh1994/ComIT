let tripExpensesArray = [98, 435, 43];

let budget = tripExpensesArray.reduce(function (acc, curr) {
    console.log(`hotel: ${tripExpensesArray[0]}, trip: ${tripExpensesArray[1]}, meals: ${tripExpensesArray[2]} 
    Total trip budget: ${acc + curr}`)
});

// console.log(budget);