const tableEl = document.getElementById("table-data");
let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
    position: "Product Manager",
    city: "Hamedan",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
    position: "Server Admin",
    city: "Tehran",
  },
];

function dataLoader(personData) {
  let i = 1;
  for (let person of personData) {
    tableEl.innerHTML += `<tr><td>${i}</td>
        <td>${person.uid}</td>  
        <td>${person.firstName}</td>    
        <td>${person.lastName}</td> 
        <td>${person.position}</td> 
        <td>${person.city}</td></tr>`;
    i++;
  }
}

dataLoader(personData);
