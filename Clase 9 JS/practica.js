// class Puerta{
//     ventana;
//     abrir;
//     constructor(){
//         this.ventana=new ventana();
//         this.abrir=false;
//     }
//     abrirPuerta(){
//         this.abrir= true;
//     }
//     cerrarPuerta(){
//         this.abrir= false;
//     }
// }

let primera= function(){
    setTimeout(function(){
        console.log("primera");
    }, 1000);
}

let segunda = function(){
    console.log("segunda");
}

primera();
segunda();