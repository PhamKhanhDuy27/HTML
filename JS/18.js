let weight = +prompt("Weight: ");
let height = +prompt("Height: ");
let bmi = weight / (height * height);
if (bmi < 18.5) {
    document.write("Underweight");
}
else if (bmi < 25) {
    document.write('Normal');
}
else if (bmi < 30) {
    document.write("Overweight");
}
else
    document.write("Obese");