// como se crea un array

// var arrayPares = [2,4,6,8,10,12,14];
// console.log(arrayPares);

// var diasDeLaSemana = ["Lunes", "Martes", "Miercoles" , "Jueves" , "Viernes" , "Sabado" , "Domingo"];
// console.log(diasDeLaSemana);

// console.log(arrayPares[arrayPares.length-1]);

// var martes = diasDeLaSemana[1];

// console.log(martes);


var diasDeLaSemana = ["Lunes", "Martes", "Miercoles" , "Jueves" , "Viernes" , "Sabado" , "Domingo"];

for(var i =0 ; i <diasDeLaSemana.length  ; i++ ) {
    console.log(diasDeLaSemana[i]);
}

var arrayPares = [2,4,6,8,10,12,14];

for(var i = 0 ; i<arrayPares.length ; i++) {
    console.log(arrayPares[i]);
}

// var estudiante = [];

//     var nombre = prompt("¿cual es tu nombre? ");

//     var edad = parseInt(prompt("¿cual es tu edad?"));

//     var curso = prompt("¿cual es tu curso?");

//     estudiante[0] = nombre;

//     estudiante[1] = edad;

//     estudiante[2] = curso;

// console.log(estudiante);


//metodos para array 

//push --- agrega un nuevo elemento en la ultima posicion al array

var frutas = ["uvas" , "piña" , "mango"];

frutas.push("naranja");

frutas.push("manzana");

console.log(frutas);


//shif ... Remueve el primer elemento del array

var personas = ["juan" , "mateo" , "marcos" , "lucas"];

personas.shift();

console.log(personas);


// unshif ....agrega nuevos elementos al comienzo del array 

var nombre = ["luz" , "margarita" , "ana"]; 

nombre.unshift("domitila" , "seferina");

console.log(nombre);

// pop .. elimina el ultimo elemento de un array 

var numeros = [1,2,3,4,5,6,7];

numeros.pop();

console.log(numeros);


// concat.... une dos arrays

 var arrayUnido = numeros.concat(nombre);

 console.log(arrayUnido);


 // indexof .. Busca una para el elemento

    var cursos = ["html5" , "css3" , "javascript" , "php"];

    var php = cursos.indexOf("php");

    console.log(php);

//join..... covierte los elementos de un arraty en una cadena

    var join = cursos.join(" * ");

    console.log(join);


// slice... seeleccionar una porcion de un array (inicio,cuantos)

var elements = ["fire", "air" , "water" , "earth"];

    var slice = elements.slice(0,2);

console.log(slice);

// splice---- agregar elementos al array(desde donde empieza , cuantos , con que se reeplazara)

var palabras = ["viento" , "lluvia" , "fuego" , "tierra" , "mar"];

    palabras.splice(1,2,"como");

    console.log(palabras);


// last indexof ... encuentra el ultimo elemento indicado

    var materia = ["html" , "css" , "php" , "firebase" , "js" , "php"];

    var php = materia.lastIndexOf("php");
    var php2 = materia.indexOf("php");


    console.log(php);
    console.log(php2);













