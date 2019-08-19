function showNumbers(start, end) {
    if (typeof start != 'number' || typeof end != 'number') {
        console.log(`Please enter a number`)
    } else if (start > end) {
        console.log(`Bigger: ${start}, smaller: ${end}`)
    } else if (start === end) {
        console.log(`Numbers are same`)
    } else {
        console.log(`Bigger: ${end}, Smaller: ${start}`)
    }
};

showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100, 100);
showNumbers(100, 300);
showNumbers('sad', 12);