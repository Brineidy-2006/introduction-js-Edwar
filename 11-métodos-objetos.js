// Brineidy Salomón - Métodos de objetos
// Con esta línea de código garantizo buenas prácticas
"use strict";

const product = {
    productName: "sensor de humedad",
    price: 300,
    available: true,
};

const speedMax = 80;
// Brineidy Salomón
let speedMax2 = 70;
console.log(speedMax2);

// Aunque el objeto product esté declarado como constante permite agregar propiedades
product.age = 42;
console.log(product);

// Brineidy Salomón
// Con el método freeze bloqueamos el objeto para que no se puedan
// agregar nuevas propiedades o eliminarlas o editarlas.

// Object.freeze(product); // congela el objeto
product.quantity = 10; // Esto solo funciona si no está congelado
console.log(product);

// Agregar nueva propiedad (solo si no está congelado)
// product.color = "rojo";

// Forma de saber si un objeto está bloqueado
// Brineidy Salomón
console.log("¿El objeto está bloqueado?: " + Object.isFrozen(product));

let response;
if (Object.isFrozen(product)) {
    response = "Sí";
} else {
    response = "No";
}
console.log("El objeto está bloqueado?: " + response);

// Brineidy Salomón
// Eliminar una propiedad de un objeto
delete product.price;
console.log(product);

// Modificar o editar las propiedades de un objeto
product.productName = "sensor PM";
console.log(product);