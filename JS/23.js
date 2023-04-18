function convertF() {
    let cel = document.getElementById('cel').value;
    let fah = cel * 9 / 5 + 32;
    document.getElementById('fah').innerHTML = fah;
}
function convertFT() {
    let m = document.getElementById('m').value;
    let ft = m * 3.2808;
    document.getElementById('ft').innerHTML = ft;
}
function areaSquare() {
    let a = +prompt('Nhập cạnh a: ');
    let areaSquare = a * a;
    document.write('Diện tích hình vuông là: ' + areaSquare + ' m2');
}
function areaRectangle() {
    let a = +prompt('Nhập cạnh a: ');
    let b = +prompt('Nhập cạnh b: ');
    let areaRectangle = a * b;
    document.write('Diện tích hình chữ nhật là: ' + areaRectangle + ' m2');
}
function areaRightTriangle() {
    let a = parseInt(prompt('Input a: '));
    let b = parseInt(prompt('Input b: '));
    let areaRightTriangle = (a * b) / 2;
    document.write("Diện tích hình tam giác vuông là: " + areaRightTriangle + ' m2');
}
//ax+b=0
function findX() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    if (a == 0 && b == 0) {
        document.getElementById('x').innerHTML = 'Phương trình có vô số nghiệm';
    }
    else if (a == 0 && b != 0) {
        document.getElementById('x').innerHTML = 'Phương trình vô nghiệm';
    }
    else if (a != 0) {
        document.getElementById('x').innerHTML = 'Phương trình có nghiệm duy nhất là: ' + (-b / a);
    }
}
//ax2+bx+c=0 (a!=0)
function findX2() {
    let a1 = document.getElementById('a1').value;
    let b1 = document.getElementById('b1').value;
    let c1 = document.getElementById('c1').value;
    let delta = (b1 * b1) - (4 * a1 * c1);
    if (a1 == 0) {
        document.getElementById('x1').innerHTML = 'a phải khác 0';
    }
    else if (delta < 0) {
        document.getElementById('x1').innerHTML = 'Phương trình vô nghiệm';
    }
    else if (delta == 0) {
        document.getElementById('x1').innerHTML = 'Phương trình có nghiệm kép x1 = x2 = ' + (-b1 / (2 * a1));
    }
    else if (delta > 0) {
        let x1 = ((-b1 + Math.sqrt(delta)) / (2 * a1));
        let x2 = ((-b1 - Math.sqrt(delta)) / (2 * a1));
        document.getElementById('x1').innerHTML = 'Phương trình có hai nghiệm x1 = ' + x1 + ' và ' + 'x2 = ' + x2;
    }
}
function age() {
    let age = parseInt(prompt('Input age: '));
    if (age < 120 && age > 0) {
        document.write(age + ' là tuổi của một người');
    }
    else {
        document.write(age + ' không phải là tuổi của một người');
    }
}
function triangle() {
    let a = parseInt(prompt('Input a: '));
    let b = parseInt(prompt('Input b: '));
    let c = parseInt(prompt('Input c: '));
    if (a > 0 && b > 0 && c > 0) {
        if ((a + b) > c && (b + c) > a && (a + c) > b) {
            document.write(a + ',' + b + ',' + c + ' là cạnh của hình tam giác');
        }
        else {
            document.write(a + ',' + b + ',' + c + ' không phải là cạnh của hình tam giác');
        }
    }
    else {
        document.write(a + ',' + b + ',' + c + ' không phải là cạnh của hình tam giác');
    }
}
function findMoney() {
    let d = document.getElementById('d').value;
    let cost;
    if (d >= 201) {
        cost = 100 * 600 + 700 * (150 - 100) + 900 * (200 - 150) + 1100 * (d - 200);
    }
    else if (d >= 151) {
        cost = 100 * 600 + 700 * (150 - 100) + 900 * (d - 150);
    }
    else if (d >= 101) {
        cost = 100 * 600 + 700 * (d - 100);
    }
    else {
        cost = d * 600;
    }
    document.getElementById('result').innerHTML = cost + ' VND'
}
function findTNCN() {
    let TNCN = document.getElementById('tncn').value;
    let money;
    if (TNCN > 84) {
        money = TNCN * 35 / 100;
    }
    else if (TNCN > 44) {
        money = TNCN * 30 / 100;
    }
    else if (TNCN > 24) {
        money = TNCN * 25 / 100;
    }
    else if (TNCN > 14) {
        money = TNCN * 20 / 100;
    }
    else if (TNCN > 9) {
        money = TNCN * 15 / 100;
    }
    else if (TNCN > 6) {
        money = TNCN * 10 / 100;
    }
    else if (TNCN > 4) {
        money = TNCN * 5 / 100;
    }
    else {
        money = TNCN * 0;
    }
    document.getElementById('money').innerHTML = money + ' triệu đồng';
}
function bankInterestRate() {
    let firstCost = parseInt(document.getElementById('firstCost').value);
    let month = document.getElementById('month').value;
    let interestRate = document.getElementById('interestRate').value;
    let i = 0;
    for (i = 0; i < month; i++) {
        firstCost = firstCost + firstCost * interestRate / 100;
    }
    document.getElementById('final').innerHTML = firstCost + ' VND';
}