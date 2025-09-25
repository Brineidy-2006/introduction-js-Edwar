// Brineidy Salomón
// Este es un objeto llamado product que almacena tres variables

const product = {
    productName: "sensor de humedad",
    price: 300,
    available: true
}

console.log(product);
console.log(typeof product);
console.log(typeof product.productName);
console.log(typeof product.price);
console.log(typeof product.available);

// Brineidy Salomón
// Para acceder a las diferentes propiedades de un objeto
// lo hacemos de la siguiente manera

console.log("El nombre del producto es: " + product.productName);
console.log("El precio del producto es: " + product.price);
console.log("El producto está disponible es: " + product.available);

// Brineidy Salomón
// Agregar propiedades a un objeto
product.image = "image.jpg";
console.log(product);