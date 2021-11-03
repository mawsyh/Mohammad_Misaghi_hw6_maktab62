const circleCursor = document.querySelector(".cursor");
const mouseCoordinate = document.querySelector(".mouse-pos");
const circleCoordinate = document.querySelector(".circle-pos");
const boxCoordinates = document.querySelector(".boxes-pos");
const redBox = document.querySelector(".red-box");
const blackBox = document.querySelector(".black-box");

window.addEventListener("mousemove", (e) => {
  let corY = e.pageY + 30;
  let corX = e.pageX + 30;
  circleCursor.style.top = `${corY}px`;
  circleCursor.style.left = `${corX}px`;
  mouseCoordinate.textContent = `Mouse coordinates: (${e.pageX}, ${e.pageY})`;
  circleCoordinate.textContent = `Circle coordinates: (${corX}, ${corY})`;
  let blackboxCor = blackBox.getBoundingClientRect();
  let redboxCor = redBox.getBoundingClientRect();

  if (
    0 <= corY - blackboxCor.top &&
    corY - blackboxCor.top <= blackboxCor.height - 15
  ) {
    if (
      0 <= corX - blackboxCor.left &&
      corX - blackboxCor.left <= blackboxCor.width - 15
    ) {
      circleCursor.style.backgroundColor = "#fe0000";
      boxCoordinates.textContent = `Black box coordinates: (${
        corX - blackboxCor.left
      }, ${corY - blackboxCor.top})`;
    } else if (
      0 <= corX - redboxCor.left &&
      corX - redboxCor.left <= redboxCor.width - 15
    ) {
      circleCursor.style.backgroundColor = "#000000";
      boxCoordinates.textContent = `Red box coordinates: (${
        corX - redboxCor.left
      }, ${corY - redboxCor.top})`;
    } else {
      circleCursor.style.backgroundColor = "#4a78c7";
      boxCoordinates.textContent = ``;
    }
  } else {
    circleCursor.style.backgroundColor = "#4a78c7";
    boxCoordinates.textContent = ``;
  }
});
