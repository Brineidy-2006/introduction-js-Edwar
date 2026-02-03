// cuando se unen dos objetos lo iedeal es no modificar ninguno de los objetos

const product ={
    productName :"sensor de humedad",
    price : 300,
    available : true,

}

Object.freeze(product);

// Objeto que almacena medidas
const neasurements = {
    weight: "1kg",
    neasurements : "10cm",
}

// Rest operator , consta de tres puntos (...)

const newProduct = {...product,...measurement};
console.log(product);
console.log(newProduct);


const producto = {
productName : "vehicle",
model :"2006",
brand : "Chevrolet Corsa",
plate : "4k31bA2",
}