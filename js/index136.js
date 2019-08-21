let mutants = ['Professor X', 'cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
newMutants = [];
mutants.forEach(function (name) {
    if (name === 'Iceman') {
        newMutants.push('Iceman')
    } else if (name === 'Logan') {
        newMutants.push('Iceman')
    } else if (name === 'Phoenix') {
        newMutants.push('Phoenix')
    }
});
console.log(newMutants.toString());