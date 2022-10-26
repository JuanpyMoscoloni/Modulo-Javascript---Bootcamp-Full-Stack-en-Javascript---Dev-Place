let opciones = prompt(
  "Eliga una opcion \n 1- Agregar Datos \n 2- Eliminar Datos"
);

switch (opciones) {
  case 1:agregarDato();
    break;
  case 2:

  default:
    break;
}

const agregarDato = () => {

    do {
        var dni = [];
        dni.push(prompt("Complete la tabla \n Ingrese un DNI"));
        var nombre = [];
        nombre.push(prompt("Ingrese un Nombre"));
        var apellidos = [];
        apellidos.push(prompt(" Ingrese un apellido"));
        var telefono = [];
        telefono.push(prompt(" Ingrese un apellido"));
        var decision = prompt(" Deseas ingresar mas datos? S/N");
      } while (decision === "S" || decision === "s");

    
}

// function IngreseDNI(num) {
//   var array = [];
//   array.push(prompt("Ingresa una palabra"));
// }

// var ingresarDatos = [];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     ingresarDatos[i][0].push(prompt("Ingrese un DNI"));
//     ingresarDatos[i][1].push(prompt("Ingrese un Nombre"));
//     ingresarDatos[i][2].push(prompt(" Ingrese un Apellido"));
//     ingresarDatos[i][3].push(prompt(" Ingrese un Telefono"));
//     var actual = ingresarDatos[i][j];
//     console.log(actual);
//   }
// }

// var ingresarDatos = [];
// var size = 4;

// for (var i = 0; i < size; i++) {
//     ingresarDatos[i]=prompt("Ingrese un DNI");
//     ingresarDatos[i]=prompt("Ingrese un Nombre");
//     ingresarDatos[i]=prompt("Ingrese un Apellido");
//     ingresarDatos[i]=prompt("Ingrese un Telefono");
//     i++;
//     var actual = ingresarDatos[i];
//     console.log(ingresarDatos);
//   }
