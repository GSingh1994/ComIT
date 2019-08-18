let monthNumber = 9;
let monthName = null;
let monthDays = null;

switch (monthNumber) {
    case 1:
        monthName = 'January';
        monthDays = '31 days';
        break;
    case 2:
        monthName = 'Feburary';
        monthDays = '28 days in a common year and 29 days in leap years';
        break;
    case 3:
        monthName = 'March';
        monthDays = '31 days';
        break;
    case 4:
        monthName = 'April';
        monthDays = '30 days';
        break;
    case 5:
        monthName = 'May';
        monthDays = '31 days';
        break;
    case 6:
        monthName = 'june';
        monthDays = '30 days';
        break;
    case 7:
        monthName = 'july';
        monthDays = '31 days';
        break;
    case 8:
        monthName = 'August';
        monthDays = '30 days';
        break;
    case 9:
        monthName = 'September';
        monthDays = '31 days';
        break;
    case 10:
        monthName = 'October';
        monthDays = '30 days';
        break;
    case 11:
        monthName = 'November';
        monthDays = '31 days';
        break;
    case 12:
        monthName = 'December';
        monthDays = '30 days';
        break;
}

if (monthDays === null && monthName === null) {
    console.log(`Name not valid`)
} else {
    console.log(`${monthName} is the selected month and has ${monthDays}`)
};