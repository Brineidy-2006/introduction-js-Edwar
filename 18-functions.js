// Functions in JS
// ¿Qué es Hoisting?
// Hoisting en JS es el comportamiento por defecto en el que el interprete "Mueve" las declaraciones (de variables y funciones) a la parte superior de su ámbito (scope) antes de ejecutar el código.
// Esto significa que puedes usar una función o variable declarada, antes de escribirla en el código.

// Declaración de una función

function add (){
    console.log(10 + 10);
};

add();

function add (){
    console.log(10 + 20);
};

// ==========

// La expresión de una función
// La expresión de la función solo puede llamarse despues de la creación

const sumar2 = function(){
    console.log(3 + 3);
};
sumar2();

// ==========
// IIFE (Inmediately Invoked Funtion Expression), esta función se llama a si misma.
// Son útiles para proteger las variables para que no mezclen con las variables de otros archivos

(function(){
    console.log("Esta es una función IIFE");
})();

// Una función IIFE con parámetros
(function(name){
    console.log(`Hello ${name}`);

})(`Iby`);
console.log (client);