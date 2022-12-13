// a.js
window.onerror = function (message, url, line, column, error) {
  console.log("log---onerror::::", message, line, column, error);
};

console.log("a load");

// let div = document.createElement("DIV");
// div.id = "new";
// div.innerHTML = "NEW";
// document.body.appendChild(div);
// console.log(document.getElementById("test").offsetWidth);
