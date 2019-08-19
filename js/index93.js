let star = '***********';
console.log(star);

for (i = 0; i < 10; i++) {
    star = star.slice(0, -1);
    console.log(star)
};