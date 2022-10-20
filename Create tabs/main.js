let ul = document.querySelector("ul");
let lis = document.querySelectorAll("ul li");
let content = document.querySelector(".content");
let divs = document.querySelectorAll(".content div");

// divs.forEach((div) => {
//   div.style.display = "none";
// });
// divs[0].style.display = "flex";
// ul.addEventListener("click", (e) => {
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   e.target.classList.add("active");
//   divs.forEach((div) => {
//     div.style.display = "none";
//   });
//   document.querySelector(e.target.dataset.item).style.display = "flex";
// });

//Another Solution
divs.forEach((div) => {
  div.style.display = "none";
});
divs[0].style.display = "flex";
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divs.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.item).style.display = "flex";
  });
});
