let userAndPassword = 'pepito2017,12345';
let username = userAndPassword.substr(0, 9);
let password = userAndPassword.substr(11);

console.log(`The user ${username} has ${password} as password.`)