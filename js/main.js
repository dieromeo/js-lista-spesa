'use strict';

const robaDaComprare = ['carne', 'salmone', 'pasta', 'riso', 'mozzarella', 'pomodoro', 'spinaci', 'mandarini', 'banane', 'cetrioli']; //array
const listaSpesa = document.querySelector('.list'); // ul html
let contatore = 0; //contatore

while (contatore < robaDaComprare.length) { //ciclo tutto l'array

    const elementoSpesa = document.createElement('li'); // creo li e gli aggiungo il testo
    elementoSpesa.innerText = robaDaComprare[contatore];
    listaSpesa.append(elementoSpesa); // lo inserisco nell'html
    contatore++; // incremento
}