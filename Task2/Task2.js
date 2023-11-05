function Check() {
    let Mark = parseFloat(document.getElementById("Mark").value);

    if (isNaN(Mark) || Mark < 0 || Mark > 100) {
        document.getElementById("Result").textContent = "Invalid Format";
    } else {
        let Grade;

        if (Mark < 50) {
            Grade = "F (فراولة)";
        } else if (Mark >= 50 && Mark <= 59) {
            Grade = "D";
        } else if (Mark >= 60 && Mark <= 69) {
            Grade = "C";
        } else if (Mark >= 70 && Mark <= 79) {
            Grade = "B";
        } else if (Mark >= 80 && Mark <= 89) {
            Grade = "A";
        } else if (Mark >= 90 && Mark <= 100) {
            Grade = "A+";
        }

        document.getElementById("Result").textContent = ` ${Grade}`;
    }
}