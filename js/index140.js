let mutants = ['Professor X', 'cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

let newMutants = mutants.filter(function (i) {
    if (i === 'Magneto' || i === 'Iceman' || i === 'Gambit') {
        i = '';
    } else {
        return i
    }
});

console.log(newMutants)