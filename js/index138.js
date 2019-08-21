let mutants = ['Professor X', 'cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

let newMutants = mutants.map(function (i) {
    if (i === 'Professor X' || i === 'Logan' || i === 'Phoenix' || i === 'Gambit') {
        return i = '<3 ' + i
    } else {
        return i
    }
});


console.log(newMutants);