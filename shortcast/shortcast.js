function generatePairs() {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("tableOfPairs");
    let numberOfStudents = +document.getElementById("numberOfStudents").value;
    var listOfStudentNumbers = [];
    console.log(numberOfStudents);  // TODO: for development purposes, delete later

    try {
        if(numberOfStudents == "") throw "empty";
        if(isNaN(numberOfStudents)) throw "not a number";
        numberOfStudents = Number(numberOfStudents);
        if(numberOfStudents < 1) throw "too low";
        if(numberOfStudents > 40) throw "too high";
        }
    catch(err) {
        document.getElementById("deadline").innerText = "Input is " + err;
        console.log(err);
        return;
    }

    

      
    while (listOfStudentNumbers.length < numberOfStudents) {
        
        console.log(listOfStudentNumbers.length);
        var studentNumber = Math.floor(Math.random() * numberOfStudents) + 1;
        console.log(studentNumber);  // TODO: for development purposes, delete later
        
        if (!(listOfStudentNumbers.includes(studentNumber))) {
        
            listOfStudentNumbers.push(studentNumber);
            console.log(listOfStudentNumbers);  // TODO: for development purposes, delete later
        
        }
    
    };

    var n = 1;
    while (listOfStudentNumbers.length > 0) {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(n);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell0 = row.insertCell(0)
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        // Add some text to the new cells:
        cell0.innerHTML = n;
        n++;
        cell1.innerHTML = listOfStudentNumbers[0];
        listOfStudentNumbers.shift();
        if (!(listOfStudentNumbers.length == 0)) {
            cell2.innerHTML = listOfStudentNumbers[0];
            listOfStudentNumbers.shift();
        } else {
            cell2.innerHTML = "-";
        }
        
    }

    const today = new Date();
    const deadline = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // Add 14 Day
    deadline.setDate(today.getDate() + 14);   
    document.getElementById("deadline").innerText = "Deadline: " + deadline.toLocaleDateString("en-US", options);    
    
    

}

