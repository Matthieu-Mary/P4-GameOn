
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const validatedFormCloseBtn = document.querySelector(".close-btn");

// edit nav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", removeModal);
validatedFormCloseBtn.addEventListener("click", removeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// remove modal
function removeModal() {
  modalbg.style.display = "none";
}



