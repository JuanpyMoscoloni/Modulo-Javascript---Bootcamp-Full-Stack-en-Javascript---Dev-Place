/*1 - Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
 Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos.*/

//  class Banco {
//     cuentaCorriente;
//     cajaAhorro;
//     seguroDeVida;
//     seguroHogar;
//     constructor(cuentaCorriente, cajaAhorro, seguroDeVida,seguroHogar){
//         this.cuentaCorriente = cuentaCorriente;
//         this.cajaAhorro= cajaAhorro;
//         this.seguroDeVida = seguroDeVida;
//         this.seguroHogar = seguroHogar;
//     }

//     clone(){
//         return new Banco(this.cuentaCorriente, this.cajaAhorro, this.seguroDeVida, this.seguroHogar);
//     }
//  }

//  const banquito = new Banco(312,321312,321312,312);
//  const copy = banquito.clon();

/*2 - Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. Si intento crear una segunda oficina me debería devolver la primera instancia creada. Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.*/

// "use strict";

// let _singleton = null;

// class Oficina {
//   constructor(nombreEmpresa,numeroEmpleados ) {
//     if (!_singleton) {
//       this.nombreEmpresa = nombreEmpresa;
//       this.numeroEmpleados = numeroEmpleados;
//       _singleton = this;
//     } else return _singleton;
//     console.log("Singleton class created");
//   }
//   GetSingletonData() {
//     return this.nombreEmpresa;
//     return this.numeroEmpleados;
//   }
// }

// function init_Singleton() {
//   var singleton1 = new Oficina("Juansito",312312);
//   var singleton2 = new Oficina("Carlito",31231 );
//   console.log(singleton1.GetSingletonData());
//   console.log(singleton2.GetSingletonData());
//   console.log(singleton1 instanceof Oficina);
//   console.log(singleton2 instanceof Oficina);
//   console.log(singleton1 === singleton2);
// }

// init_Singleton();

/*3 - Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá. Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente. Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor devolviendo this en cada uno de ellos.  Instanciar todos los valores por defecto que querra nuestro cliente de los ingredientes de nuestra pizza. Utilizar el metodo build para crear una nueva instancia de pizza. Aplicar el patron de diseño builder. Realizar este mismo ejercicio sin aplicar el patron de diseño builder. ¿Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo de pizza.*/

// class Pizza {
//   constructor() {
//     this.tomate = false;
//     this.queso = false;
//     this.masafina = false;
//     this.anana = false;
//     this.bacon = false;
//     this.otrosIngredientes = [];
//   }

//   setTomate() {
//     this.tomate = true;
//     return this;
//   }
//   setQueso() {
//     this.queso = true;
//     return this;
//   }
//   setMasafina() {
//     this.masafina = true;
//     return this;
//   }
//   setAnana() {
//     this.anana = true;
//     return this;
//   }
//   setBacon() {
//     this.bacon = true;
//     return this;
//   }
//   addOtrosIngredientes(ingredientes) {
//     this.otrosIngredientes.push(ingredientes);
//     return this;
//   }

//   build() {
//     return {
//       tomate: this.tomate,
//       queso: this.queso,
//       masafina: this.masafina,
//       anana: this.anana,
//       bacon: this.bacon,
//       otrosIngredientes: this.otrosIngredientes,
//     };
//   }
// }

// let pizza = new Pizza().build();

// let pizzaConAnana = new Pizza().setTomate().setAnana().build();

// let pizzaConQuesoYSalame = new Pizza()
//   .setTomate()
//   .setQueso()
//   .addOtrosIngredientes("Salame")
//   .build();

// console.log(pizza);
// console.log(pizzaConAnana);
// console.log(pizzaConQuesoYSalame);


