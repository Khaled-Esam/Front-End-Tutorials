let input = document.querySelector("input");
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let div = document.querySelector("div");
let max = input.getAttribute("maxlength");
count.innerHTML = max;
input.oninput = function () {
  count.innerHTML = max - this.value.length;
  progress.style.width = `${(this.value.length * 100) / max}%`;
  if (count.innerHTML == 0) {
    count.classList.add("zero");
  } else {
    count.classList.remove("zero");
  }
};
