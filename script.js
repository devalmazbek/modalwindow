"use strict";

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const btnsModal = document.querySelectorAll(".show-modal");
console.log(modal);

console.log(btnsModal);

// function to show modal window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// event click for btnModal
for (let prop of btnsModal) {
  prop.addEventListener("click", openModal);
}

// event close modal

closeModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

// escape keydown

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});

// test script
