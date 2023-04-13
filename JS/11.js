function year1() {
    let year = parseInt(prompt("Enter a year"));
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                alert(year + " is a leap year");
            }
            else {
                alert(year + " is Not a leap year");
            }
        }
        else {
            alert(year + " is a leap year");
        }
    }
    else {
        alert(year + " is Not a leap year");
    }
}
function year2() {
    let year = parseInt(prompt("Enter a year"));
    let isLeapYear = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                isLeapYear = true;
            }
        }
        else {
            isLeapYear = true;
        }
    }
    if (isLeapYear) {
        alert(year + " is a leap year");
    }
    else {
        alert(year + " is Not a leap year");
    }
}
function year3() {
    let year = parseInt(prompt("Enter a year"));
    let isLeapYear = false;
    let isDivisbleBy4 = year % 4 == 0;
    if (isDivisbleBy4) {
        let isDivisbleBy100 = year % 100 == 0;
        if (isDivisbleBy100) {
            let isDivisbleBy400 = year % 400 == 0;
            if (isDivisbleBy400) {
                isLeapYear = true;
            }
        }
        else {
            isLeapYear = true
        }
    }
    if (isLeapYear) {
        alert(year + " is a leap year");
    }
    else {
        alert(year + " is Not a leap year");
    }
}
