function calculate() {
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100;
    let times = parseInt(document.getElementById('times').value);
    let years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(times) || isNaN(years)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    let amount = principal * Math.pow((1 + rate / times), times * years);
    let interest = amount - principal;

    document.getElementById('result').innerText = `Total Amount: $${amount.toFixed(2)}\nCompound Interest: $${interest.toFixed(2)}`;
}