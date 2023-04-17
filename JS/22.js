function divide() {
    let a = +prompt('Input a: ');
    let b = +prompt('Input b: ');
    if (a % b == 0) {
        alert(a + " chia hết cho " + b);
    }
    else {
        alert(a + " không chia hết cho " + b);
    }
}
function age() {
    let age = +prompt('Input age: ');
    if (age >= 14) {
        alert('Đủ điều kiện vào học lớp 10');
    }
    else {
        alert('Không đủ điều kiện học lớp 10');
    }
}
function compareZero() {
    let num = +prompt('Input number: ');
    if (num < 0) {
        document.write(num + ' bé hơn 0');
    }
    else if (num > 0) {
        document.write(num + ' lớn hơn 0');
    }
    else {
        document.write(num + ' bằng 0');
    }
}
function findTheLargestNumber() {
    let a = +prompt('Input First Number: ');
    let b = +prompt('Input Second Number: ');
    let c = +prompt('Input Third Number: ');
    if (a > b) {
        if (a > c) {
            alert(a + ' là số lớn nhất');
        }
    }
    if (a < b) {
        if (b > c) {
            alert(b + ' là số lớn nhất');
        }
    }
    if (a < b) {
        if (b < c) {
            alert(c + ' Là số lớn nhất');
        }
    }
}
function rankedAcademic() {
    let testMarks = +prompt('Input Test Marks: ');
    let pointBetweenPeriod = +prompt('Input Point between period: ');
    let finalExamScore = +prompt('Input Final exam score: ');
    let mediumScore = (testMarks + pointBetweenPeriod + finalExamScore * 2) / 4;
    if (mediumScore >= 8) {
        document.write('Xếp loại giỏi');
    }
    else if (mediumScore >= 6.5) {
        document.write('Xếp loại khá');
    }
    else if (mediumScore >= 5) {
        document.write('Xếp loại trung bình');
    }
    else if (mediumScore >= 3.5) {
        document.write('Xếp loại yếu');
    }
    else {
        document.write('Xếp loại kém');
    }
}
function commission() {
    let revenue = +prompt('Input Revenue: ');
    let percentCommission;
    if (revenue > 110) {
        percentCommission = 0.1;
    }
    else if (revenue == 110) {
        percentCommission = 0.07;
    }
    else if (revenue >= 100) {
        percentCommission = 0.05;
    }
    else {
        percentCommission = 0;
    }
    let moneyCommission = revenue * percentCommission;
    document.write('Tiền hoa hồng là: ' + moneyCommission);
}
function moneyMobile() {
    let timeCall = +prompt('Input Time Call: ');
    let money;
    if (timeCall <= 50) {
        money = 600;
    }
    else if (timeCall <= 150) {
        money = 400;
    }
    else {
        money = 200;
    }
    let moneyMob = 25000 + timeCall * money;
    document.write('Cước điện thoại của hộ gia đình là: ' + moneyMob);
}

