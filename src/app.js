/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/
let prefijo = ["grande", "importante", "super", "muy", "mucho"];
let palabra = ["codigo", "tecnologia", "pila", "computador", "pc"];
console.log(palabra);
// for (let a = 0; a < prefijo.length; a++) {
// for (let b = 0; b < palabra.length; b++) {
// let p = document.createElement("p");

// div.innerText = `${prefijo[a]}${palabra[palabra].com} `;
// document.body.appendChild(p);
// }
// }

prefijo.map(e => {
  palabra.map(b => {
    let p = document.createElement("p");
    p.innerText = `${e}${b}.com `;
    document.body.appendChild(p);
    console.log(p.innerText);
  });
});
