const signupForm = document.querySelector(".main-container");
const inputs = document.querySelectorAll(".signup-form input");
const signupBtn = document.querySelector(".signup-button");
const userEl = document.querySelector(".usernamer-container");
const passEl = document.querySelector(".password-container");
const repassEl = document.querySelector(".repassword-container");
const successEl = document.querySelector(".successfull");
let userValue = document.querySelector(".username");
let passValue = document.querySelector(".password");
let repassValue = document.querySelector(".repassword");

signupBtn.addEventListener("click", () => {
  let successStep = 0;
  //checking if the username feild is empty or not
  if (userValue.value === "") {
    userEl.innerHTML = `
            <input type="text" class="username" placeholder="نام کاربری">
            <p>الزامی</p>
    `;
    userValue = document.querySelector(".username");
    userValue.classList.add("wrong");
  } else {
    userEl.innerHTML = `
    <input type="text" class="username" placeholder="نام کاربری">
    `;
    userValue.classList.remove("wrong");
    successStep++;
  }
  // checking if the password includes at least 1char and 1num
  let charCounter = 0;
  let numCounter = 0;
  let passowrdString = passValue.value.toLowerCase();
  let passArray = passowrdString.split("");
  for (let index of passArray) {
    if (index.charCodeAt(0) > 97 && index.charCodeAt(0) < 122) {
      charCounter++;
    }
    if (index.charCodeAt(0) > 48 && index.charCodeAt(0) < 57) {
      numCounter++;
    }
  }
  //checking if the password feild is empty or not
  if (passValue.value === "") {
    passEl.innerHTML = `
            <input type="password" class="password" placeholder="کلمه عبور">
            <p>الزامی</p>
    `;
    passValue = document.querySelector(".password");
    passValue.classList.add("wrong");
  } else if (passValue.value.length < 8) {
    //checking the password length
    let tempPassValue = passValue.value;
    passEl.innerHTML = `
    <input type="password" class="password" placeholder="کلمه عبور">
    <p>رمز عبور باید شامل حداقل 8 کارکتر و حداقل یک حرف و یک عدد باشد</p>
  `;
    passValue = document.querySelector(".password");
    passValue.value = tempPassValue;
    passValue.classList.add("wrong");
  } else if (charCounter === 0 || numCounter === 0) {
    // checking if the password includes at least 1char and 1num
    let tempPassValue = passValue.value;
    passEl.innerHTML = `
    <input type="password" class="password" placeholder="کلمه عبور">
    <p>رمز عبور باید شامل حداقل 8 کارکتر و حداقل یک حرف و یک عدد باشد</p>
  `;
    passValue = document.querySelector(".password");
    passValue.value = tempPassValue;
    passValue.classList.add("wrong");
  } else {
    passEl.innerHTML = `
    <input type="password" class="password" placeholder="کلمه عبور">
    `;
    passValue.classList.remove("wrong");
    successStep++;
  }
  if (repassValue.value === "") {
    //checking if the repassword feild is empty or not
    repassEl.innerHTML = `
            <input type="password" class="repassword" placeholder="تکرار کلمه عبور">
            <p>الزامی</p>
    `;
    repassValue = document.querySelector(".repassword");
    repassValue.classList.add("wrong");
  } else {
    repassEl.innerHTML = `
    <input type="password" class="repassword" placeholder="تکرار کلمه عبور">
    `;
    repassValue.classList.remove("wrong");
  }
  if (passValue.value !== repassValue.value) {
    //checking if the repassword and password value are the same
    console.log(passValue.value);
    console.log(repassValue.value);
    repassEl.innerHTML = `
      <input type="password" class="repassword" placeholder="تکرار کلمه عبور">
      <p>رمز های وارد شده یکسان نیست</p>
      `;
    repassValue = document.querySelector(".repassword");
    repassValue.classList.add("wrong");
  } else if (passValue.value !== "" && repassValue.value !== "") {
    console.log(passValue.value);
    console.log(repassValue.value);
    repassEl.innerHTML = `
    <input type="password" class="repassword" placeholder="تکرار کلمه عبور">
    `;
    repassValue.classList.remove("wrong");
    successStep++;
    console.log("gooz");
  }
  // showing success message
  if (successStep === 3) {
    successEl.classList.add("active");
  }
  repassValue.value = "";
  passValue.value = "";
  userValue.value = "";
  successStep = 0;
  setInterval(function () {
    successEl.classList.remove("active");
  }, 3000);
});
