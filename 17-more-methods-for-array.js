// More methods
// Este arreglo se creó usando el constructor
const month = new Array ("January", "February", "March", "May", "June");


// Este No tiene constructor
const shoppingCart = [
{productName:"Smart TV 60",price:3000},
{productName:"Smart TV 60",price:1000},
{productName:"Tablet",price:2000},
{productName:"Google assistand",price:2500},
{productName:"Play Station",price:4000},
{productName:"Will",price:8000},
{productName:"Mouse",price:7000},
]

// Recorrer el arreglo con un forEach para que muestre todos los elementos
// En este caso months es un parámetro
month.forEach(function(month){
    console.log(month);
    });
    month.forEach(function(month1){
        if (month == 'May') {
            console.log("The month of may exist in the array");
     
        }else{
            console.log("Does't exist");
        }
   
    })

    // Buscar en un arreglo si algo existe, si existe devuelve true si no un false.
    const result = month.includes('June');
    console.log(result);

    // En JS includes No funciona bien con los objetos
    const result2 = shoppingCart.includes('Tablet');
    console.log(result2);

    const num = 5 == 5;
    console.log("Igualación doble", num);

   // Con igualación doble solo compara el valor por eso en el navegador o en la consola tenemos un true.
    const num2 = 5 == "5";
    console.log("Igualación doble", num2);

   // Con igualación triple verifica si es del mismo valor y tipo.
    const num3 = 5 === "5";
    console.log("Igualación triple", num3);

  // ==========
  // En conclusión para un arreglo plano se usa inlcudes y para un arreglo de objetos se usa some.
  // const result5 = shoppingCart.some(function(product){
  // return product.productName === "Tablet"
  // })

 // console.log(result5);

// Hace lo mismo que el código anterior pero más corto con Arrow Funtion
let result5 = shoppingCart.some(product => product.productName === "Play Station")
console.log(result5);

// ==========

// Método reduce
// Sumar todos los precios del carrito de compras
result5 = shoppingCart.reduce(function(total, product){
    return total + product.price
}, 0)

console.log(result5);

// Lo mismo pero con función flecha
result5 = shoppingCart.reduce((total, product) => total + product.price, 0)
console.log(result5);

// ==========
// Filtrar los valores menores que 700
result5 = shoppingCart.filter(function(product){
    return product.price < 8000
});

console.log(result5);

// Filtrar los del mismo producto
result5 = shoppingCart.filter(function(product){
    return product.productName === 'sound-bar'
});

console.log(result5);

// Lo mismo pero con Arrow Funtion
result5 = shoppingCart.filter(product => product.productName === 'sound-bar')

console.log(result5);

// Todos excepto un tipo
result5 = shoppingCart.filter(function(product){
    return product.productName !== 'sound-bar'
});

console.log(result5);