let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let str = "";
let str6 = "";
for (let i = 0; i < 6; i++) {
  str += arr[Math.floor(Math.random() * arr.length)];
}

let str2 = "#" + str;
console.log(str2);
document.body.style.backgroundColor = str2;
