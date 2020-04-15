var selectedRow = null

function onFormSubmit() {

    var fromData = readFormData();
    if (selectedRow == null)
        insertNewRecord(fromData);
    else
        updateRecord(fromData);
    resetForm();
}



function readFormData() {
    var fromData = {};
    fromData["fname"] = document.getElementById("fname").value;
    fromData["lname"] = document.getElementById("lname").value;
    fromData["phone"] = document.getElementById("phone").value;
    fromData["checkindate"] = document.getElementById("checkindate").value;
    fromData["checkoutdate"] = document.getElementById("checkoutdate").value;
    fromData["tcarro"] = document.getElementById("tcarro").value;
    fromData["asientos"] = document.getElementById("asientos").value;
    fromData["dir1"] = document.getElementById("dir1").value;
    fromData["dir2"] = document.getElementById("dir2").value;
    fromData["room"] = document.getElementById("room").value;
    fromData["s1"] = document.getElementById("s1").value;
    fromData["s2"] = document.getElementById("s2").value;
    return fromData;
}

function insertNewRecord(data) {
    var table = document.getElementById("reservas").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.checkindate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.checkoutdate;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.tcarro;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.asientos;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.dir1;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.dir2;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.room;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.s1;
    cell12 = newRow.insertCell(11);
    cell12.innerHTML = data.s2;
    cell13 = newRow.insertCell(12);
    cell13.innerHTML =  `<a onClick="onEdit(this)">Edit</a>
                         <a onClick="onDelete(this)">Delete</a>`;


}

function resetForm() {

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("checkindate").value = "";
    document.getElementById("checkoutdate").value = "";
    document.getElementById("tcarro").value = "";
    document.getElementById("asientos").value = "";
    document.getElementById("dir1").value = "";
    document.getElementById("dir2").value = "";
    document.getElementById("room").value = "";
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("address").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("eaddress").value = "";

    selectedRow = null


}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("checkindate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("checkoutdate").value = selectedRow.cells[4].innerHTML;
    document.getElementById("tcarro").value = selectedRow.cells[5].innerHTML;
    document.getElementById("asientos").value = selectedRow.cells[6].innerHTML;
    document.getElementById("dir1").value = selectedRow.cells[7].innerHTML;
    document.getElementById("dir2").value = selectedRow.cells[8].innerHTML;
    document.getElementById("room").value = selectedRow.cells[9].innerHTML;
    document.getElementById("s1").value = selectedRow.cells[10].innerHTML;
    document.getElementById("s2").value = selectedRow.cells[11].innerHTML;

}

function updateRecord(fromData) {
    selectedRow.cells[0].innerHTML = fromData.fname;
    selectedRow.cells[1].innerHTML = fromData.lname;
    selectedRow.cells[2].innerHTML = fromData.phone;
    selectedRow.cells[3].innerHTML = fromData.checkindate;
    selectedRow.cells[4].innerHTML = fromData.checkoutdate;
    selectedRow.cells[5].innerHTML = fromData.tcarro;
    selectedRow.cells[6].innerHTML = fromData.asientos;
    selectedRow.cells[7].innerHTML = fromData.dir1;
    selectedRow.cells[8].innerHTML = fromData.dir2;
    selectedRow.cells[9].innerHTML = fromData.room;
    selectedRow.cells[10].innerHTML = fromData.s1;
    selectedRow.cells[11].innerHTML = fromData.s2;
}

function onDelete(td) {
    if (confirm('¿Desea eliminar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("reservas").deleteRow(row.rowIndex);
        resetForm();
    }
}