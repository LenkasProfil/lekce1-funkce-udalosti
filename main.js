// tady je místo pro náš program



/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
 function secti(a, b) {
  let c = a + b; // definovani promeny a plus b 
  document.querySelector("#vysledek").innerHTML = c; // c se vklada do vnitrni komponenty s id vysledek (HTML)
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  document.querySelector('#test').innerHTML = "Kolečko"; //honota kolecko se vlozi do vnitrni komponenty ctverecek v HTML pres navolene id test
  //document.querySelector('.ctverecek').innerHTML = "Kolečko"; //honota kolecko se vlozi do vnitrni komponenty ctverecek v HTML
  console.log("Gratulace, právě jsi spustila tuto funkci!"); //vypsani do console totozny text jako warning - potreba dat nad funci alert jinak ceka na OK 
  alert("Gratulace, právě jsi spustila tuto funkci!");
}


/**
 * Upraví barvu pozadí předaného prvku
 * 
 * @param {string} elementSelector // povinny parametr ketry se vklada do funkce s kterou funkce pote pracuje 
 */
function priKliknuti (elementSelector) {    // funkce na zmenu barvy nadpisu na zelenou po kliku na tlacitko 
  // tanto funkce je napvno hardcode, meli bychom se tomuto vyhnout
  //let squereElement = document.querySelector('.ctverecek');
  //squereElement.style.backgroundColor = 'green';
  document.querySelector(elementSelector).style.backgroundColor = 'green'; // selector ketry vybira parametr a stylem meni backroudn na zelenou
}


