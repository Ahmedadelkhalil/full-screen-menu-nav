let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let closed = document.querySelector(".close");

burger.onclick = function () {
  nav.classList.add("show");
};

closed.onclick = function () {
  this.parentElement.classList.remove("show");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("show");
  }
};
