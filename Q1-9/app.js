const tableEl = document.getElementById("table-data");
const rowEl = document.getElementById("row");
const uidEl = document.getElementById("uid");
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const positionEl = document.getElementById("position");
const cityEl = document.getElementById("city");
const dataPanel = document.querySelector(".additional-data");

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
    tableMakerHtml += `
      <tr id="satr">
        <td id="data">${person.uid}</td>  
        <td id="data">${person.firstName}</td>    
        <td id="data">${person.lastName}</td> 
        <td id="data">${person.position}</td> 
        <td id="data">${person.city}</td>
        <i class="fas fa-times-circle remove"></i></tr>`;
    i++;
  }
  tableEl.innerHTML = tableMakerHtml;
}
dataLoader(personData);

//this function will sort the table descending
//by the colum head that is clicked on
function sortByHead(headerName) {
  let headerType = typeof personData[0][headerName];
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
  popUp();
}

//pop up the data on screen when clicked on a single data
function popUp() {
  const dataEl = document.querySelectorAll("#data");
  dataEl.forEach((element) =>
    element.addEventListener("click", () => {
      for (let person of personData) {
        let data;
        if (element.innerHTML.length === 1) data = Number(element.innerHTML);
        else data = element.innerHTML;
        if (Object.values(person).includes(data)) {
          let popUp = document.createElement("div");
          popUp.innerHTML = `
      <i class="fas fa-times"></i>
      <p>Uid: ${person.uid}</p>
      <p>First Name: ${person.firstName}</p>
      <p>Last Name: ${person.lastName}</p>
      <p>Position: ${person.position}</p>
      <p>City: ${person.city}</p>
      `;
          dataPanel.classList.add("active");
          dataPanel.appendChild(popUp);
        }
      }
      const closeBtn = document.querySelector(".fa-times");
      closeBtn.addEventListener("click", () => {
        dataPanel.classList.remove("active");
        dataPanel.innerHTML = ``;
      });
    })
  );
}
popUp();
