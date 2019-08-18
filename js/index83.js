let star = '***********';
console.log(star);
i = 0;
do {
    star = star.slice(0, -1);
    console.log(star)
    i++
} while (i < 10) 