// Brineidy Salomón - desestructuración de objetos

const product = {
    productName: "sensor de humedad",
    price: 300,
    available: true,
}

// Aquí un ejemplo de desestructuración de objetos
// Brineidy Salomón

const productPrice = product.price;
const productName = product.productName;

console.log(productPrice);
console.log(productName);

// Sirve para extraer los valores de un objeto
// Brineidy Salomón

const { price, available } = product;
console.log(price, available);