let mutants = ['Professor X', 'cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
for (i = 0; i < mutants.length; i++) {
    if (mutants.indexOf('Magneto') !== -1) {
        break;
    } else {
        console.log(mutants[i])
    }
};

mutants.splice(4, 1);

for (i = 0; i < mutants.length; i++) {
    console.log((i + 1) + mutants[i].toUpperCase())
};
