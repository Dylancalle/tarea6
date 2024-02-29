import sumar from "./sumador";
import { mostrar } from "./fizzbuzz";

const first = document.querySelector("#primer-numero");

const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  

  div.innerHTML = "<p>" + mostrar(firstNumber) + "</p>";
});
