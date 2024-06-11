function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    document.getElementById('result').innerText = `Simple Interest: $${interest.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`;
}