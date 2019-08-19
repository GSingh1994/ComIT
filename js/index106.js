function getUserId() {
    return 10;
};

function isUserValid() {
    let userId = getUserId();
    if (userId > 30) {
        return true
    } else {
        return false
    }
};

if (isUserValid()) {
    console.log(`User valid`)
} else {
    console.log(`User not valid`)
};