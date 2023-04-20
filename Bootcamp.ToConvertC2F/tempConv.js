const celsiusInput = document.getElementById('celsius-input');
const convertButton = document.getElementById('convert-button');
const resultOutput = document.getElementById('result-output');

convertButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 1.8) + 32;
  resultOutput.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;

  localStorage.setItem('celsius', celsius);
  localStorage.setItem('fahrenheit', fahrenheit.toFixed(2));
});

const storedCelsius = localStorage.getItem('celsius');
const storedFahrenheit = localStorage.getItem('fahrenheit');
if (storedCelsius && storedFahrenheit) {
  resultOutput.innerText = `${storedCelsius}°C is equal to ${storedFahrenheit}°F`;
}
