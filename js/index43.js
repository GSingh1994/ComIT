let text = "game of thrones";

let firstChar, secondChar, thirdChar;

firstChar = text.charAt(0);
secondChar = text.charAt(5);
thirdChar = text.charAt(8);

let result = (firstChar + secondChar + thirdChar).toUpperCase();

console.log(`The final result is : ${result}`);

