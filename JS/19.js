function dayOfMonth() {
    let month = parseInt(document.getElementById("month").value);
    switch (month) {
        case 1, 3, 5, 7, 8, 10, 12:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 31 ngày";
            break;
        case 4, 6, 9, 11:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 30 ngày";
            break;
        case 2:
            document.getElementById("result").innerHTML = "Tháng " + month + " có 28 hoặc 29 ngày";
            break;
        default:
            document.getElementById("result").innerHTML = "Vui lòng nhập lại tháng";
            break;
    }
}