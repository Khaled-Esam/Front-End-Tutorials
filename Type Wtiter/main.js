let p = document.querySelector("p");
let arr = [..."Welcome To Khaled Academy"];
let i = 0;
let counter = setInterval(() => {
  p.textContent += arr[i];
  i++;
  if (p.textContent === "Welcome To Khaled Academy") {
    clearInterval(counter);
    p.classList.add("reset");
  }
}, 160);
