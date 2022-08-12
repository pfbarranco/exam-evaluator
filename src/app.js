let buttonOk = document.getElementById("studentsButton");

buttonOk.disabled = true;

let numberOfStudentsInput = document.getElementById("numberOfStudentsInput");

let evaluateButton1 = document.getElementById("evaluateButton1");
let evaluateButton2 = document.getElementById("evaluateButton2");

evaluateButton1.disabled = true;
evaluateButton2.disabled = true;

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

    let table = document.getElementById("studentsTable");

buttonOk.addEventListener("click", function () {
    clearAndCompleteTable();
    evaluateButton1.disabled = false;
    evaluateButton2.disabled = false;
})

let numberOfStudentsForm = document.getElementById("numberOfStudentsForm");

numberOfStudentsForm.addEventListener("keypress", function () {
    if (event.key === "Enter") {
        clearAndCompleteTable();
        evaluateButton1.disabled = false;
        evaluateButton2.disabled = false;
    }
    })

function clearAndCompleteTable() {
    for (let i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    for (let i = 1; i <= numberOfStudentsInput.value; i++) {
        addRowToStudentsTable(i);
    }
}

function addRowToStudentsTable(i) {
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = i;
    cell2.innerHTML = "Elvis Presley";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
}


