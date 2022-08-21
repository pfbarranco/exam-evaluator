/* OK BUTTON
OK button is disabled by default */

async function retrieveNames(numberOfStudents) {
    let students = []
    for (let index = 0; index < numberOfStudents; index++) {
        students.push("Carlos")
    }
    return students;
// fetch('https://random-data-api.com/api/name/random_name?size=3')
//     .then(response => response.json())
//     .then(data => console.log(data));
}

let buttonOk = document.getElementById("studentsButton");

buttonOk.disabled = true;

/* OK button cleans table after clicking before printing scores with a new number */

buttonOk.addEventListener("click", function () {
    clearAndCompleteTable();
    evaluateButton1.disabled = false;
    evaluateButton2.disabled = false;
});

/* Number of students form.
Enter key does the same functions as click on OK button */

let numberOfStudentsForm = document.getElementById("numberOfStudentsForm");

numberOfStudentsForm.addEventListener("keypress", function () {
    if (event.key === "Enter" && numberOfStudentsInput.value <= 30 && numberOfStudentsInput.value >= 1) {
        clearAndCompleteTable();
        evaluateButton1.disabled = false;
        evaluateButton2.disabled = false;
    }
});

/* Evaluate button */

let evaluateButton1 = document.getElementById("evaluateButton1");
let evaluateButton2 = document.getElementById("evaluateButton2");

/* Evaluate button is disabled by default */

evaluateButton1.disabled = true;
evaluateButton2.disabled = true;

/* When clicking on evaluate buttons scores and proper images are printed */

evaluateButton1.addEventListener("click", function () {
    printScore();
    sendButton.disabled = false;
});
evaluateButton2.addEventListener("click", function () {
    printScore();
    sendButton.disabled = false;
});

/*Number of students input */

let numberOfStudentsInput = document.getElementById("numberOfStudentsInput");

/* Entering a number (1-30) enables the OK button.
A different number keeps the OK button disabled.
If the number is wrong an error message is dispalyed. */

numberOfStudentsInput.addEventListener("input", function () {

    evaluateButton1.disabled = true;
    evaluateButton2.disabled = true;
    sendButton.disabled = true;

    if (numberOfStudentsInput.value <= 30 && numberOfStudentsInput.value >= 1) {
        buttonOk.disabled = false;
        numberOfStudentsInput.setCustomValidity("");
    } else {
        buttonOk.disabled = true;
        numberOfStudentsInput.setCustomValidity("Number must be between 1 and 30.");
        numberOfStudentsInput.reportValidity();
    }
});

/* Table*/

let table = document.getElementById("studentsTable");

/* Add random scores (0-100) after clicking on Evaluate buttons in proper column and with proper image */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
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
        students[i].score = score; // update student score
    }
};

/* Clear table and add new rows depending on the input number */

function clearAndCompleteTable() {
    for (let i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    students = []; // clear array
    retrieveNames(numberOfStudentsInput.value)
        .then(names => {
            for (let i = 0; i < names.length; i++) {
                let name = names[i];
                addRowToStudentsTable(i + 1, name);
            }
        })

};

/* Add rows to students table depending on the input number */

function addRowToStudentsTable(i, name) {
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    row.insertCell(2);
    // TODO: until proper task to be done
    // row.insertCell(3);

    cell1.innerHTML = i; // Number
    cell2.innerHTML = name;
    let student = new Student(i, name);
    students.push(student); //Add student to the array
};

/* Send button*/

let sendButton = document.getElementById("sendButton");

/* Send button is disabled by default */

sendButton.disabled = true;

/* Confirmation message pops up after clicking on send button */

sendButton.addEventListener("click", function () {
    askForConfirmationMessage();
});

function askForConfirmationMessage() {
    const text = "Do you really want to send your evaluations?";
    if (confirm(text) == true) {
        confirmationMessage();
    }
};

function confirmationMessage() {
    const text = "Evaluations properly sent!";
    alert(text);
    location.reload(); // Page reloads after clicking on OK
};

/* Array of students ready to be sent */
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    score;
};

let students = [];