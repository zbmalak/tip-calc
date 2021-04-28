"use strict";

const btnSubmit = document.querySelector(".submit--btn");
const parentEl = document.querySelector(".result--container");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const billValue = document.querySelector(".value").value;
  const tipPercent = document.querySelector(".tip--percent").value;

  const overallValue = +billValue + billValue * tipPercent;

  if (!billValue || billValue < 0) return;

  parentEl.textContent = "";
  parentEl.insertAdjacentHTML(
    "afterbegin",
    `
  <span class="result">You have to pay ${overallValue.toFixed(2)}$!</span>
  `
  );
});
