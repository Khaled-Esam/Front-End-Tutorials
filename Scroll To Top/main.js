let up = document.querySelector("i");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    up.style.opacity = "1";
  } else {
    up.style.opacity = "0";
  }
};

up.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
