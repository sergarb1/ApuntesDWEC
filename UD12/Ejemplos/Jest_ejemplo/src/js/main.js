import { suma } from "./suma.js";

window.onload = function () {
  const miDiv = document.getElementById("miDiv");
  miDiv.innerHTML = suma(4, 5);
}
