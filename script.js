function bmiCalculation() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");
  
    if (isNaN(weight) || isNaN(height) || height <= 0) {
      result.textContent = "Please enter valid values!";
      return;
    }
  
    const bmi = weight / (height * height);
    let category;
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    result.textContent = `Your BMI is ${bmi.toFixed(2)} - ${category}`;
  }
  