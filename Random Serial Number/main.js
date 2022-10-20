let serial = document.querySelector(".serial");
let gen = document.querySelector("span");

gen.onclick = function () {
  let chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  let s = result.match(/\w{4}/gi).join("-");
  serial.style.width = "fit-content";
  serial.innerHTML = s;
};
