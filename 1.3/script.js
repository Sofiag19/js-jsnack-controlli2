// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// e poi creare funzione di ciò..

// 1 - con array già esistente
arrayNum = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(arrayNum);

var ritorno = sommaPosDisp(arrayNum);
console.log(ritorno);

// 2 - con array vuoto con numeri random
array1 = [];
var ran;
for (var k = 5; k < 40; k++) {
  ran = numRandom(5,40);
  array1.push(ran);
}

console.log(array1);
var ritorno1 = sommaPosDisp(array1);
console.log(ritorno1);

// FUNZIONI
// funzione per la somma delle posizioni dispari
function sommaPosDisp (array){
  var tot = 0;
  for (var j = 0; j < array.length; j++) {
    if (j % 2 != 0) {
      tot += array[j];
    }
  }
  return tot;
}

// funzione numeri random estremi compresi
function numRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
