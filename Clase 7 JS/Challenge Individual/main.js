// let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10]
// let numerosMayoresADiez = []

// numeros.forEach( (num) => {
//     if(num>10){
//         numerosMayoresADiez.push(num)
//     }
// })
// console.log(num);

// function aMenosQue(prueba, entonces) {
//     if(!prueba) entonces();
// }

// repetir(3, n => {
//     aMenosQue(n % 2 == 1, () => {
//         console.log(n, "es par");
//     });
// });

//Consigna 1
// let meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];

// console.log(meses);

//Consigna 2

// function numeroParOImpar(num) {
//   if (num % 2 == 0) {
//     console.log("Es Par");
//   }
//   else
//   {
//     console.log("Es Impar");
//   }
// }

// numeroParOImpar(5);

//Consigna 3

// var array = [];
// array.push(prompt("Ingresa una palabra"));

// console.log(array);

// array.forEach((element) => {
//   if (element== element.toUpperCase()) {
//     console.log("Son Mayusculas");
//   }
//  else if (element == element.toLowerCase()) {
//     console.log("Son Minusculas");
//   } else{
//     console.log("Hay minusculas y mayusculas");
//   }
// });

//Consigna 4
// Realizado con while

// function factorialize(num){
//  var result= num;
//  if (num===0 || num===1)
//     return 1;

//  while(num>1){
//     num--;
//     result = result * num;
//  }
//     return result;
// }

// console.log(factorialize(5));

// Realizado con for

// function factorialize(num) {

//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   for (var i = num - 1; i >= 1; i--) {
//     num = num * i;
//   }
//   return num;
// }

// console.log(factorialize(5));
