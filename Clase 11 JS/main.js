let usuarios = [];	
usuarios.push({
    nombre: "Juan",
    apellido: "Juarez",
    mail: "Juan@gmail.com"
});
usuarios.push({
    nombre: "Matias",
    apellido: "Jimenez",
    mail:"Mati@gmail.com"
});
usuarios.push({
    nombre: "Camila",
    apellido: "Paredes",
    mail:"Camii10@gmail.com"
});

usuarios.sort(function(valor1,valor2){
    if(valor1.mail < valor2.mail){
        return -1;
    }else{
        return 1;
    }
});
console.table(usuarios);  
