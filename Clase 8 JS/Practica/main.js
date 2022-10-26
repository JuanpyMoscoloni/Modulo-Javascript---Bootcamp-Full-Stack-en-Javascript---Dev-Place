// const frutas = ["Naranja", "Manzana", "Pera"];
// console.log(frutas.map((fruta) => fruta.length)); //Funcion arrow

// function frutis(fruta) {
//   return fruta.length; // Funcion tradicional
// }
// console.log(frutis("Banana"));

// (function (param) {
//   return param + 100; // Funcion Anonima tradicional
// });

// (param) => {
//   return param + 100; // Funcion anonima arrow
// };

// (a) => a + 100;

// Funcion anonima tradicional
// (function (param1, param2) {
//   return param1 + param2 + 100;
// });

// Funcion flecha
// (param1, param2) => param1 + param2 + 100;

// Funcion anonima sin argumentos
// (function () {
//   return param1 * param2 + 100;
// });

// Funcion flecha sin argumentos
// () => param1 * param2 + 100;

// Funcion tradicional
// function suma100(param) {
//   return param + 100;
// }

// Funcion flecha
// const sumando100 = (param) => frutis + 100;

// Objetos

// const objeto = {
//   fullname: "Martin Perez",
//   edad: 13,
//   esMayor: function () {
//     if(objeto.edad>= 18){
//         console.log("Es mayor");
//     }else{
//         console.log("Es menor");
//     }
//   }
// };

// console.log(objeto.fullname);
// console.log(objeto.edad);
// console.log(objeto.esMayor());

// class Mascota{
//     nombre;
//     edad;
//     duenio;

//     constructor(nombre, duenio){
//         this.nombre = nombre;
//         this.duenio = duenio;
//     }

//     edad_perro(){
//         return edad;
//     }


// }

class tareas{
    id;
    titulo;
    completado;
    fecha_creado;

    constructor(id, titulo,completado,fecha_creado){
        this.id = id;
        this.titulo = titulo;
        this.completado = completado;
        this.fecha_creado = fecha_creado;
    }

    tarea1(){
        id: 1;
        titulo: "Lavar Platos";
        completado: false;
        fecha_creado: "26/10/2022";
    }

}

function crearAlbum(genero, titulo, nombreBanda)
{
    let album =  {
        gender: genero,
        title: titulo,
        nombre: nombreBanda
    }
    return album;
}