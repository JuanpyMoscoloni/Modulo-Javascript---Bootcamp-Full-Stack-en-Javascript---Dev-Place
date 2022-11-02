// -Realizar un programa que simule una calculadora, donde realice las operaciones básicas (suma, resta, multiplicación, división), el usuario debe primero ingresar dos valores, y especificar con un carácter la operación a realizar, para el uso del ejercicio debe usar la sentencia switch.


// let a= parseInt(prompt("Ingrese el primer valor"));
// let b= parseInt(prompt("Ingrese el segundo valor"));

// let opcion = parseInt(prompt("1 SUMAR, 2 RESTAR, 3 MULTIPLICAR, 4 DIVIDIR"));

// switch(opcion){
//     case 1: sumar(a,b);
//     break;
//     case 2: restar(a,b);
//     break;
//     case 3: multiplicar(a,b);
//     break;
//     case 4: dividir(a,b);
//     break;
//     default: console.log("Ingrese un valor valido");
//     break;
// }

// function sumar(a,b){
//     console.log(a+b);
// }
// function restar(a,b){
//     console.log(a-b);
// }
// function multiplicar(a,b){
//     console.log(a*b);
// }
// function dividir(a,b){
//     console.log(a/b);
// }




// -Realizar un programa que permita ingresar por teclado 10 números en un array debe:

// Mostrar el número mayor
// Mostrar el número menor
// Mostrar los números pares
// Mostrar los números impares
// Ordenarlos de manera Ascendente
// Ordenarlos de manera Descendente


// let array2 = [];

// for (let i = 1; i < 11; i++){
//  array2.push(parseInt(prompt(i + " Ingrese valores a su arreglo: ")));
// }

// let ordenarMenorMayor = array2.sort((a,b) => {
//     return a-b;
// });

// array2.forEach((element) =>{ if(element % 2==0){
//     console.log((element) + " es Par");
// }else{
//     console.log((element) + " es Impar");
// }});

// console.log(ordenarMenorMayor[0]);
// console.log(ordenarMenorMayor);

// let MayoraMenor = ordenarMenorMayor.reverse();
// console.log(MayoraMenor[0]);
// console.log(MayoraMenor);



/*-Se quiere simular un juego en el que participan N jugadores y otra persona que hace de árbitro. Cada jugador elige 4 números en el rango [1, 10], pudiendo estar repetidos. A continuación, el árbitro, sin conocer los números que ha elegido cada jugador, selecciona 2 números A y B.
El programa debe ser capaz de calcular cuántos números de los seleccionados por cada jugador están comprendidos entre los valores A y B. Ganará el jugador que más números tenga en dicho intervalo.*/


function cargarDatos(){
    let i = 0;
    let jugadores=[];
while(i<4){
    let numeros = parseInt(prompt("Ingrese 4 valores entre 1 y 10: "));
    if(numeros < 10 && numeros > 0){
        i++;
        jugadores.push(numeros);
    }else console.log("Ingrese un valor valido");
}
return jugadores;
}

function cargarDatosArbitro(){
    let i = 0;
    let arbitro=[];
    while(i<2){
        let a = parseInt(prompt("Ingrese el valor inicial entre 1 y 10"));
        let b = parseInt(prompt("Ingrese el valor final entre "+ a +" y 10"));
        if(a<10 && a > 0 && b < 10 && b > 0){
            i++;
            arbitro.push(a)
        }else {
            console.log("Introduce un dato valido");
        }
    }
    return arbitro;
}

jugador1=cargarDatos();
jugador2=cargarDatos();
jugador3=cargarDatos();
console.log(jugador1);
console.log(jugador2);
console.log(jugador3);


/*- Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una persona) y cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional. Construye los siguientes métodos para la clase:
Un constructor, donde los datos pueden estar vacíos.
mostrar(): Muestra los datos de la cuenta.
ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos
*/

// class Cuenta{
//     titular;
//     cantidad;
//     constructor(){
//         this.titular = titular;
//     }

//     mostrar(){
//         console.log(this.titular,this.cantidad);
//     }
//     ingresar(cantidad){
//         let cantidadIngresada = cantidad;
//         if(cantidadIngresada>0){
//             cantidad+=cantidadIngresada;
//             console.log("Dinero Ingresado: " + cantidadIngresada);
//         }else{
//             console.log("Los datos no son validos");
//         }
//     }
//     retirar(cantidad){
//         let cantidadRetirada = cantidad;
//         console.log("La cantidad retirada es de: " + cantidadRetirada);
//     }
// }

// ingresar(1200);
// retirar(100);


//-Crear un programa que sume los elementos de una lista de enteros recursivamente.




