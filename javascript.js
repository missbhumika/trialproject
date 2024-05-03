function weightHeight(weight, height) {
    var bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
        return ("Your bmi is " + bmi + ", so you are underweight");
    } else if (bmi > 24.9) {
        return ("Your bmi is " + bmi + ", so you are overweight");
    } else {
        return ("Your bmi is " + bmi + ", so you have a normal weight");
    }

}

function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var result = weightHeight(weight, height);
    document.getElementById("result").innerText = result;
}





