//toggle
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu3").onclick = () => {
  navbarNav.classList.toggle("active");
};

const men3 = document.querySelector("#menu3");

document.addEventListener("click", function (e) {
  if (!menu3.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
