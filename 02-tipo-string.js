// Cadena de texto

const sensor ="temperatura";
const sensor2 ="ph";
      console.log(sensor);
      console.log(sensor2);

const sensor3 = String ("presion");  
const sensor4 = new String ("humedad");
      console.log(sensor3);
      console.log(sensor4);

// Para saber el tipo de una variable 

console.log(typofsensor3);
let product = ("televisor de 32\"");

let product2 = ("televisor de 58\"");
    console.log(product);
    console.log(product2);

// Métodos con string
   
console.log(product.length);
let userName ="valentina gañan bueno";
    console,log(userName.length);

// Sirve para saber si una cadena de texto existe en una frase 

// Idex nos muestra la posicion en la que se encuentra la cadena de texto 

// Si la cadena No existe muestra un resultado menos que cero (0)

let phrase ="aqui vamos a buscar la palabra sena ";
    console.log(phrase.indexOf("sena"));

// Hacer lo mismo de una forma mas moderna,el resultado es un true o un false

    let phrase2 ="aqui vamos a buscar la palabra SENA";
    console.log(phrase.includes("SENA"));