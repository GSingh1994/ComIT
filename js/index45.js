let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = " Winnipeg is the best Canadian city, Go Winnipeg";

let firstJetsChar = teams.slice(46, -21).charAt(0).toUpperCase();
let patrikLaine = playerName.slice(0, 13).toUpperCase();
let is = playerName.slice(13, 16);
let theBest = message.slice(13, 22);
let jets = firstJetsChar + teams.slice(47, -21);
let goJets = message.slice(35, 40) + firstJetsChar + teams.slice(47, -21);


let template = patrikLaine + is + theBest + jets + "player" + goJets + "!!";


console.log(template);