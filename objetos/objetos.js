// sintaxis

var persona = {
    nombre : "keysi" ,
    edad : 23,
    comida : "ceviche" , 
    genero : "rock" , 
    curso : ["javascript" , "html5" , "css3"]
}



// como accedemos a un obejeto 


console.log(persona.comida);

// recoriendo los valores 

for ( var i in persona) {
    console.log(persona[i]);
}

//recoriendo la longitud o propiedades 


console.log(Object.keys(persona));

