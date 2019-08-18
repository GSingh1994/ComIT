let star = '***********';
console.log(star);
i = 0;
while (i < 10) {
    star = star.slice(0, -1);
    console.log(star)
    i++
};