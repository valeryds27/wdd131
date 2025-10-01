const currentyear = document.querySelector('#currentyear');
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp, speed) {
    return 13.12 + .6215 * temp - 11.37 * speed ** .16 * temp * speed ** .1
}

let temperature = 30;
let wind_speed = 5;
let wind_chill = "N/A"

if (temperature <= 10 && wind_speed > 4.8) {
    wind_chill = calculateWindChill(temperature, wind_speed).toFixed(1) + "°C"
}
document.getElementById("wind_chill").textContent = wind_chill;
