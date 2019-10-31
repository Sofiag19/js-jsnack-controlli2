// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// inizializzo le due liste esistenti
var nomi = ["Piero","Giovanna","Lucia","john","Jennifer","Skyler"];

var cognomi = ["Smith","Capone","Jones","Drew","McFly","Gill"];

// inizializzo la nuova lista
var lista = [];

var i = 0;
var j = 0;
while ( i < nomi.length && j < cognomi.length) {
  var randomNome = nomi[Math.floor(Math.random()*nomi.length)];
  var randomCognome = cognomi[Math.floor(Math.random()*cognomi.length)];
  lista.push(randomNome + " " + randomCognome);
  i++;
}
console.log(lista);

// var risultato = arrayAss(nomi, cognomi, lista);

// function arrayAss(array1, array2, new) {
//   var new = [];
//   var i = 0;
//   var j = 0;
//   while (i < array1.lenght && j < array2) {
//     var random1 = array1[Math.floor(Math.random()*array1.length)];
//     var random2 = array2[Math.floor(Math.random()*array2.length)];
//     new.push([random1,random2]);
//     i++;
//   }
// }
