const tableEl = document.getElementById("table-data");
const rowEl = document.getElementById("row");
const uidEl = document.getElementById("uid");
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const positionEl = document.getElementById("position");
const cityEl = document.getElementById("city");
const dataPanel = document.querySelector(".addictional-data");

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

// this function will load the table
function dataLoader(personData) {
  let i = 1;
  let tableMakerHtml = ``;
  for (let person of personData) {
    tableMakerHtml += `<tr><td>${i}</td>
        <td onclick="showPersonDataInPanel(person)">${person.uid}</td>  
        <td>${person.firstName}</td>    
        <td>${person.lastName}</td> 
        <td>${person.position}</td> 
        <td>${person.city}</td></tr>`;
    i++;
  }
  tableEl.innerHTML = tableMakerHtml;
}
dataLoader(personData);

//this function will sort the table descending
//by the colum head that is clicked on
function sortByHead(headerName) {
  let headerType = typeof personData[0][headerName];
  console.log(headerType);

  switch (headerType) {
    case "number":
      personData = personData.sort((a, b) => b[headerName] - a[headerName]);
      break;
    case "string":
      personData = personData.sort((a, b) =>
        b[headerName].localeCompare(a[headerName])
      );
      break;
  }
  dataLoader(personData);
}

function showPersonDataInPanel(person) {}
