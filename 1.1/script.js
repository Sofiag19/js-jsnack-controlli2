// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// richiesta
var numUtente = parseInt(prompt("Inserisci un numero"));

// output
var risposta = pari0Disp1(numUtente);
console.log(risposta);

// funzione
function pari0Disp1 (num) {
  if (num % 2 === 0) {
    return num;
  } else {
    return num + 1 + " mentre in realtà era " + num;
  }
}
