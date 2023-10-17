// Get input elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const convertButton = document.getElementById("convert");

// Conversion function
function convertTemperature() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        const kelvin = celsius + 273.15;
        kelvinInput.value = kelvin.toFixed(2);
    } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
}

// Event listener
convertButton.addEventListener("click", convertTemperature);




