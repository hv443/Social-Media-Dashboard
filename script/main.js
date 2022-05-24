const darkModeBtn = document.getElementById("dark-btn");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode-active");
  body.classList.toggle("light-mode");
});
