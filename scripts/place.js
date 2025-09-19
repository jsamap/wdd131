// LAST MODIFIED
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last modification: ${new Date(document.lastModified).toLocaleString('en-US')}`;

// WIND CHILL
function calculateWindChill(airTemperature, windSpeed) {
  return 13.12 + (0.6215 * airTemperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * airTemperature * Math.pow(windSpeed, 0.16));
}

const windChillElement = document.querySelector("#wind-chill");
const temperature = 19;
const windSpeed = 5;

if (temperature<=10 && windSpeed>4.8){
    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillElement.innerHTML = windChillValue.toFixed(1) + " °C";
} else {
    windChillElement.innerHTML = "N/A";
}

