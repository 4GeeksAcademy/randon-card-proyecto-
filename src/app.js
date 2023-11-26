/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //aqui escribo el espacio de memoria con los formas y los numeros a elegir
  let palos = ["♥", "♠", "♦", "♣"]; // los objetos siempre van acompañados con un " "
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]; //aqui hay un claro ejemplo con los objetos (letras) y los numeros

  // aqui escribo el codigo para obtener un palo y un numero random
  // creando el espacio de memoria para obtener un numero random relacionado con el espacio de memoria de los palos y los numeros
  let randomPalos = Math.floor(Math.random() * palos.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);
  let elementPalos = document.getElementsByClassName("palos");
  elementPalos[0].innerHTML = palos[randomPalos];
  elementPalos[1].innerHTML = palos[randomPalos];

  // aqui escribo "SI" sale el "♥" o el "♦" y con el .style.color = "red" seran rojos
  if (palos[randomPalos] === "♥" || palos[randomPalos] === "♦") {
    elementPalos[0].style.color = "red";
    elementPalos[1].style.color = "red";

    // aqui escribo "SI" (que en realidad es "SINO" sale) sale el "♠" o el "♣" seran negros
    // (aunque no especifique que "palos" hay ya el codigo lo toma por defecto, el negro es un color que ya esta por defecto)
  } else {
    elementPalos[0];
    elementPalos[1];
  }
  document.querySelector(".numeros").innerHTML = numeros[randomNumeros];
};
