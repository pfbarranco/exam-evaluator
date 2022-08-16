/* OK BUTTON
OK button is disabled by default */

let buttonOk = document.getElementById("studentsButton");

buttonOk.disabled = true;

/* OK button cleans table after clicking before printing scores with a new number */

buttonOk.addEventListener("click", function () {
    clearAndCompleteTable();
    evaluateButton1.disabled = false;
    evaluateButton2.disabled = false;
})

/* Number of students form.
Enter key does the same functions as click on OK button */

let numberOfStudentsForm = document.getElementById("numberOfStudentsForm");

numberOfStudentsForm.addEventListener("keypress", function () {
    if (event.key === "Enter" && numberOfStudentsInput.value <= 30 && numberOfStudentsInput.value >= 1) {
        clearAndCompleteTable();
        evaluateButton1.disabled = false;
        evaluateButton2.disabled = false;
    }
})

/* Evaluate button */

let evaluateButton1 = document.getElementById("evaluateButton1");
let evaluateButton2 = document.getElementById("evaluateButton2");

/* Evaluate button is disabled by default */

evaluateButton1.disabled = true;
evaluateButton2.disabled = true;

/* When clicking on evaluate buttons scores and proper images are printed */

evaluateButton1.addEventListener("click", function () {
    printScore();
})
evaluateButton2.addEventListener("click", function () {
    printScore();
})

/*Number of students input */

let numberOfStudentsInput = document.getElementById("numberOfStudentsInput");

/* Entering a number (1-30) enables the OK button.
A different number keeps the OK button disabled.
If the number is wrong an error message is dispalyed. */

numberOfStudentsInput.addEventListener("input", function () {

    evaluateButton1.disabled = true;
    evaluateButton2.disabled = true;

    if (numberOfStudentsInput.value <= 30 && numberOfStudentsInput.value >= 1) {
        buttonOk.disabled = false;
        numberOfStudentsInput.setCustomValidity("");
    } else {
        buttonOk.disabled = true;
        numberOfStudentsInput.setCustomValidity("Number must be between 1 and 30.");
        numberOfStudentsInput.reportValidity();
    }
})

/* Table*/

let table = document.getElementById("studentsTable");

/* Add random scores (0-100) after clicking on Evaluate buttons in proper column and with proper image */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function printScore() {
    for (i = 0; i < numberOfStudentsInput.value; i++) {
        let score = getRandomIntInclusive(0, 100);
        let tr = table.rows[i + 1]; // Starting on second row
        let cell = tr.cells[2]; // Third column

        if (score <= 49) {
            cell.innerHTML = score + " <img src='src/img/red_cross.png' width='25'>";
        } else {
            cell.innerHTML = score + " <img src='src/img/green_check.png' width='25'>";
        }
    }
}

/* Clear table and add new rows depending on the input number */

function clearAndCompleteTable() {
    for (let i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    for (let i = 1; i <= numberOfStudentsInput.value; i++) {
        addRowToStudentsTable(i);
    }
}

/* Add rows to students table depending on the input number */

function addRowToStudentsTable(i) {
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = i; // Number
    cell2.innerHTML = "Elvis Presley";
}