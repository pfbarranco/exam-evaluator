document.getElementById("studentsButton").disabled = true;

let numberOfStudentsInput = document.getElementById("numberOfStudentsInput");

numberOfStudentsInput.addEventListener("input", function () {


    if (numberOfStudentsInput.value <= 30 && numberOfStudentsInput.value >= 1) {

        studentsButton.disabled = false;
        numberOfStudentsInput.setCustomValidity("");

    } else {

        studentsButton.disabled = true;
        numberOfStudentsInput.setCustomValidity("Number must be between 1 and 30.");
        numberOfStudentsInput.reportValidity();

    }
})

let buttonOk = document.getElementById("studentsButton");

let table = document.getElementById("myTable");

buttonOk.addEventListener("click", function () {
   clearAndCompleteTable ();
})

let numberOfStudentsForm = document.getElementById("numberOfStudentsForm");

numberOfStudentsForm.addEventListener("keypress", function () {
    if (event.key === "Enter") {
        clearAndCompleteTable ();
    }
})

function clearAndCompleteTable () {
    for(let i = 1;i<table.rows.length;){
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


