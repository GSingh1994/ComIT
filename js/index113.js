function getShapePerimeter(base, height) {
    if (base === height) {
        perimeter = 4 * base;
    } else if (base !== height) {
        perimeter = 2 * (base + height)
    };
    return `${perimeter} is the shape perimeter`;
};

console.log(getShapePerimeter(232, 8));

if (perimeter > 100) {
    console.log(`Perimeter is too big`)
} else {
    console.log(`The perimeter is fine`)
};
