let femaleStudents = ['Diana', 'Brenda', 'Danica', 'Elisa', 'Foram'];
let maleStudents = ['sam', 'gagan', 'Oladipo', 'Hugo', 'Jwan'];
let students = maleStudents.concat(femaleStudents);

students.sort();

for (i = 0; i < femaleStudents.length; i++) {
    console.log((i + 1) + femaleStudents[i])
}

i = 0;
while (i < maleStudents.length) {
    console.log(maleStudents[i])
    i++
};

for (i = 0; i < students.length; i++) {
    console.log(students[i])
};