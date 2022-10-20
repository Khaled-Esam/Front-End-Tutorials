let ul = document.querySelector("ul");
let lis = document.querySelectorAll("ul li");
let content = document.querySelector(".content");
let contentDivs = document.querySelectorAll(".content div");

// ul.addEventListener("click", function (e) {
//   lis.forEach((ele) => {
//     ele.classList.remove("select");
//   });
//   e.target.classList.add("select");
//   contentDivs.forEach((div) => {
//     if (e.target.classList.contains("all")) {
//       div.style.display = "flex";
//     } else if (!e.target.classList.contains(div.className)) {
//       div.style.display = "none";
//     } else {
//       div.style.display = "flex";
//     }
//   });
// });

lis.forEach((li) => {
  li.addEventListener("click", function (e) {
    lis.forEach((e) => e.classList.remove("select"));
    e.target.classList.add("select");

    contentDivs.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelectorAll(this.dataset.item).forEach((item) => {
      item.style.display = "flex";
    });
  });
});
