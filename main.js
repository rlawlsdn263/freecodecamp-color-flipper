const main = document.querySelector(".main");
const mainColor = document.querySelector(".main-color");
const colorFlip = document.querySelector(".button-colorFlip");

colorFlip.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  main.style.backgroundColor = "#" + randomColor;
  mainColor.innerHTML = "#" + randomColor;
});
