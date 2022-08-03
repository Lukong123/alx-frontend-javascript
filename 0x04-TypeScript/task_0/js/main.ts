interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

const student1: Student = {
    firstName: "Anne",
    lastName: "Berinyuy",
    age: 20,
    location: "Bamenda",

};

const student2: Student = {
    firstName: "Oscar",
    lastName: "Berinyuy",
    age: 30,
    location: "Cameroon",

};

const studentsList: Student[] = [student1, student2];
console.log(studentsList);

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row)

});
table.appendChild(tbody);
document.body.appendChild(table);