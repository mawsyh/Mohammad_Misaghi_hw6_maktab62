const tableEl = document.getElementById("table-data");
const rowEl = document.getElementById("row");
const uidEl = document.getElementById("uid");
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const positionEl = document.getElementById("position");
const cityEl = document.getElementById("city");
const dataSection = document.querySelector(".additional-data");
const editSection = document.querySelector(".editing-data");
const mainTable = document.getElementById("main-table");

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
        <td id="data" class="lastData">${person.city}</td>
        </tr>`;
    i++;
  }
  tableEl.innerHTML = tableMakerHtml;
  mainTable.classList.remove("active");
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
  remove();
}

//pop up the data on screen when clicked on a single data
function popUp() {
  const moreInfoBtn = document.querySelector("#more-info");
  const dataEl = document.querySelectorAll("#data");
  moreInfoBtn.addEventListener("click", () => {
    mainTable.classList.add("active");
    dataEl.forEach((element) =>
      element.addEventListener("click", () => {
        for (let person of personData) {
          let data;
          if (element.innerHTML.length === 1) data = Number(element.innerHTML);
          else data = element.innerHTML;
          if (Object.values(person).includes(data)) {
            let popUp = document.createElement("div");
            dataSection.innerHTML = `<i class="fas fa-times"></i>`;
            popUp.innerHTML = `
      <p>Uid: ${person.uid}</p>
      <p>First Name: ${person.firstName}</p>
      <p>Last Name: ${person.lastName}</p>
      <p>Position: ${person.position}</p>
      <p>City: ${person.city}</p>
      `;
            dataSection.classList.add("active");
            dataSection.appendChild(popUp);
          }
        }
        const closeBtn = document.querySelector(".fa-times");
        closeBtn.addEventListener("click", () => {
          dataSection.classList.remove("active");
          dataSection.innerHTML = ``;
        });
      })
    );
  });
}
popUp();

//deleting a row
function remove() {
  const deleteBtn = document.querySelector("#delete");
  const dataEl = document.querySelectorAll("#data");
  deleteBtn.addEventListener("click", () => {
    mainTable.classList.add("active");
    dataEl.forEach((element) =>
      element.addEventListener("click", () => {
        for (let personIndex in personData) {
          let data;
          if (element.innerHTML.length === 1) data = Number(element.innerHTML);
          else data = element.innerHTML;
          if (Object.values(personData[personIndex]).includes(data)) {
            personData.splice(personIndex, 1);
            dataLoader(personData);
          }
        }
      })
    );
  });
}
remove();

//editing a row
function edit() {
  const editBtn = document.querySelector("#edit");
  const dataEl = document.querySelectorAll("#data");
  editBtn.addEventListener("click", () => {
    mainTable.classList.add("active");
    dataEl.forEach((element) =>
      element.addEventListener("click", () => {
        for (let person of personData) {
          let data;
          if (element.innerHTML.length === 1) data = Number(element.innerHTML);
          else data = element.innerHTML;
          if (Object.values(person).includes(data)) {
            let editPanel = document.createElement("div");
            editSection.innerHTML = `<i class="fas fa-times"></i>`;
            let editingData = Object.keys(person).find(
              (key) => person[key] === data
            );
            editPanel.innerHTML = `<p>This person "${editingData}" should be changed to:</p>
            <br>
            <input id="changing-value" type="text">
            <button id="submit-btn" type="submit">Change it!</button>
            `;
            editSection.classList.add("active");
            editSection.appendChild(editPanel);
            const changingValue = document.getElementById("changing-value");
            const submitBtn = document.getElementById("submit-btn");
            submitBtn.addEventListener("click", () => {
              person[editingData] = changingValue.value;
              editSection.classList.remove("active");
              editSection.innerHTML = ``;
              dataLoader(personData);
            });
          }
        }
        const closeBtn = document.querySelector(".fa-times");
        closeBtn.addEventListener("click", () => {
          editSection.classList.remove("active");
          editSection.innerHTML = ``;
        });
      })
    );
  });
}
edit();

//add new uid
function addNewRow() {
  const newRowBtn = document.getElementById("new-row");
  newRowBtn.addEventListener("click", () => {
    let newRowHtml;
    newRowHtml = `<tr id="newSatr">
    <td id="input"><input id="new-uid" class="new-row" type="text"></td>
    <td id="input"><input id="new-firstname" class="new-row" type="text"></td>    
    <td id="input"><input id="new-lastname" class="new-row" type="text"></td> 
    <td id="input"><input id="new-position" class="new-row" type="text"></td> 
    <td id="input""><input id="new-city" class="new-row" type="text"></td>
    </tr>`;
    tableEl.innerHTML += newRowHtml;
    const newUid = document.getElementById("new-uid");
    const newFirstName = document.getElementById("new-firstname");
    const newLastName = document.getElementById("new-lastname");
    const newPosition = document.getElementById("new-position");
    const newCity = document.getElementById("new-city");
    const addBtn = document.querySelector("#add-row");
    addBtn.addEventListener("click", () => {
      let uidsArray = [];
      for (let person of personData) {
        uidsArray.push(Object.values(person)[0]);
      }
      if (
        uidsArray.includes(Number(newUid.value)) &&
        Number(newUid.value) !== 0
      ) {
        alert("This uid is already in table");
      } else if (Number(newUid.value) !== 0) {
        uidsArray.push(Number(newUid.value));
        let newPerson = {};
        newPerson["uid"] = Number(newUid.value);
        newPerson["firstName"] = newFirstName.value;
        newPerson["lastName"] = newLastName.value;
        newPerson["position"] = newPosition.value;
        newPerson["city"] = newCity.value;
        personData.push(newPerson);
        dataLoader(personData);
        newUid.value = ``;
      }
    });
  });
}
addNewRow();

function done() {
  const doneBtn = document.querySelector("#done");
  doneBtn.addEventListener("click", () => {
    dataLoader(personData);
    popUp();
    remove();
    edit();
    done();
    addNewRow();
  });
}
done();
