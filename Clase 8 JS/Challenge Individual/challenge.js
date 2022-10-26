
// CONSIGNA 1
class NIF {
  dni;
  letra;

  // Constructor
  constructor(){
    dni=0;
    letra= "";
  }
  constructor(dni) {
    this.dni = dni;
    this.letra = this.calcularLetra();
  }

  calcularLetra() {
    letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
      "T",
    ];
    return letras[dni % 23];
  }

  ingresarDni(){
    do{
      this.dni=(parseInt(prompt("Introduce dni")));
    }while(dni<=0);
    this.letra=this.calcularLetra();
  }

  getDni(){
    return this.dni;
  }
  setDNI(dni){
    this.dni=dni;
  }

  
}
// CONSIGNA 3
// class Persona {
//   nombre;
//   edad;
//   dni;

//   constructor(nombre, edad, dni) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dni = dni;
//   }
//   mostrar(){
//     return this.nombre + " " + this.edad + " " + this.dni;
//   }
//   esMayor(){
//     this.edad >= 18;
//     return "Es mayor";
//   }
// }

// let persona = new Persona("Mario",17,"44322412");
// console.log(persona.mostrar());
// console.log(persona.esMayor());
