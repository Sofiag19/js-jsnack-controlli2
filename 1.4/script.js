// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

array1 = [1,6,8,3,4,9,6,3];
// console.log(array1);
array2 = [5,7,8];
// console.log(array2);

var j = 0;
// var newEl;
// while (array1.length < array2.length) {
//   newEl = numRandom(6, 20);
//   array1.push(newEl);
// }

// if (array1.length < array2.length) {
//   while (array1.length < array2.length) {
//     newEl = numRandom(6, 20);
//     array1.push(newEl);
//   }
// } else if (array1.length > array2.length) {
//   while (array1.length > array2.length) {
//     newEl = numRandom(6, 20);
//     array2.push(newEl);
//   }
// } else {
//   console.log("Hanno la stessa lunghezza");
// }

function paragone(arrayp,arrays){
  var newEl;
  if (array1.length < array2.length) {
    while (array1.length < array2.length) {
      newEl = numRandom(6, 20);
      array1.push(newEl);
    }
    return arrayp, arrays;
  } else if (array1.length > array2.length) {
    while (array1.length > array2.length) {
      newEl = numRandom(6, 20);
      array2.push(newEl);
    }
  return arrays, arrayp;
  } else {
    return "Hanno la stessa lunghezza";
  }
}

var risultato = paragone(array1,array2);
console.log(risultato);
// console.log(array1);
// console.log(array2);

// funzione numeri random estremi compresi
function numRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
