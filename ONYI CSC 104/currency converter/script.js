function convertCurrency() {
    const naira = parseFloat(document.getElementById('naira').value);
    const exchangeRate = 460; // Example exchange rate, you can update this with the current rate

    if (isNaN(naira) || naira <= 0) {
        alert('Please enter a valid amount in Naira.');
        return;
    }

    const dollars = naira / exchangeRate;
    document.getElementById('result').innerText = `Amount in Dollars: $${dollars.toFixed(2)}`;
}