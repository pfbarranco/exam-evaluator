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

buttonOk.addEventListener("click", function () {
    for (let i = 1; i <= numberOfStudentsInput.value; i++) {
        myFunction();
    }
})

let numberOfStudentsForm = document.getElementById("numberOfStudentsForm");

numberOfStudentsForm.addEventListener("keypress", function () {
    if (event.key === "Enter") {
        for (let i = 1; i <= numberOfStudentsInput.value; i++) {
            myFunction();
        }
    }
})

function myFunction() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    cell4.innerHTML = "NEW CELL4";
    cell5.innerHTML = "NEW CELL5";
}


