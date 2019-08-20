function revert(str) {
    splitString = str.split('');
    reverseString = splitString.reverse();
    joinString = reverseString.join('');
    console.log(joinString);
};


revert('gagan');
revert('hello');
revert('Nicolas');
revert('Pablo');
revert('brenda');