function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature.');
        return;
    }

    let result;
    if (unit === 'C') {
        result = (temperature * 9 / 5) + 32;
        document.getElementById('result').innerText = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5 / 9;
        document.getElementById('result').innerText = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
}