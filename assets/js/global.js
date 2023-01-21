const burger = document.querySelector(".burger");
const mini_nav = document.querySelector(".mini-nav");

// Event Listeners
burger.addEventListener("click", () => {
  mini_nav.classList.toggle("active");
});

window.onload = function () {
  document.querySelector(".loading-container").style.display = "none";
};
