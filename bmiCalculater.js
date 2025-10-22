//BMI Calculator
//The first parameter would be the weight and the second should be the height.

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);   // BMI formula
    return Math.round(bmi);                 // Round to the nearest whole number
}

var bmi = bmiCalculator(85, 1.78);
console.log(bmi);