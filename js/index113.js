function getShapePerimeter(base, height) {
    if (base === height) {
        perimeter = 4 * base;
    } else if (base !== height) {
        perimeter = 2(base + height)
    };
    return perimeter;
}

console.log(getShapePerimeter(8, 8));
