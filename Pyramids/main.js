let str = "";
for (let i = 0; i < 10; i++) {
  str += "* ";
  document.write(`<p>${str}</p>`);
}
let str2 = "";
for (let i = 0; i < 10; i++) {
  str2 += " *";
  document.write(`<p style="text-align:center">${str2}</p>`);
}
let str3 = "";
for (let i = 0; i < 10; i++) {
  str3 += "* ";
  document.write(`<p style="text-align:right">${str3}</p>`);
}
