function calculateCGPA() {
    let grades = document.getElementById('grades').value.split(',').map(Number);
    let credits = document.getElementById('credits').value.split(',').map(Number);

    if (grades.length !== credits.length || grades.some(isNaN) || credits.some(isNaN)) {
        alert('Please enter valid grades and credits.');
        return;
    }

    let totalPoints = grades.reduce((sum, grade, index) => sum + grade * credits[index], 0);
    let totalCredits = credits.reduce((sum, credit) => sum + credit, 0);

    let cgpa = totalPoints / totalCredits;

    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
}