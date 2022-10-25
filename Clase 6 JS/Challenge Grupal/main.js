/* Ordenar 3 numeros de menor a mayor */
/* Sumar 2 numeros por parametro */
/* Mostrar numero par */
let opcion= prompt("Eliga un valor");
switch (opcion) {
  case 0:
    MenorAMayor();
    break;
  case 1:
    numeroPar();
    break;
  default:
    alert("Eliga un valor valido");
}

function MenorAMayor() {
    let num1= prompt("Eliga su primero numero");
    let num2= prompt("Eliga su segundo numero");
    let num3= prompt("Eliga su tercer numero");

    if (num1 > num2 && num1 > num3) {
      
    }
}

function numeroPar(numero) {
    return (numero % 2) == 0; 
    console.log(numero);
}

function sumarNumeros(num1,num2){
    let res;
    res= num1 + num2;
    console.log(res);
}

