// Arrow funtion
// En JS es una forma más corta de escribir funciones usando la sintaxis () ->

// Sintaxis más breve, ideal para funciones peuqeñas
// No tiene su propio this, hereda el this del contexto donde se define.

// Function sin parámetros
const add = function(){
console.log (16 + 3);   
}
add();

// Function con parámetros
const add2 = function(num1, num2){
 console.log(num1 + num2);
}

add2(4, 8);

// Las llaves son opcionales cuando después de la flecha solo tengo una sentencia
const add3 = (num3, num4) => {
    console.log(num3 + num4);
}

add3(6, 9);

// ==== Conmigo se siente Rico Programar

// Otro Ejemplo
const learn = (tecnology) => {
    console.log('Aprendiendo ${tecnology}');
}

learn('JavaScript');

// ====

const months = ["January", "February", "March", "May", "June"];


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

// months.forEach( funtion(month){
//  if(month == 'November'|| month == 'December'){
// console.log('Se verificó en el arreglo y el mes Si existe');
// }else{
//console.log('El mes No existe');
//}
//})


months.forEach( function(month){
    if(month == 'November'|| month == 'December'){
        console.log('Se verificó en el arreglo y el mes Si existe');
    }else{
        console.log('El mes No existe');
    }
})

// ==== With Me Feels Rich Programming ====

// const result = shoppingCart.some(funtion(product){
//   return product.price === 800;
// })

 // console.log(result);

 const result = shoppingCart.some(product =>product.price === 800);

 console.log(result);

 // ==== What did ES6 bring? ====
 // let and const: newe ways of declaring variables.
 // Arrow functions: () => {}.

 // const result3 = shoppingCart.reduce(funtion( total, product){
 //   return total + product.price;
 // }, 0)
//  console.log(result3)

 const result3 = shoppingCart.reduce((total, product) => total + product.price,
  0)

 console.log(result3)

// ==== ¿Qué hace una variable en una fiesta? ====
// Declararse ... 

const result6 = shoppingCart.filter(function(product){
    return product.price < 600;
})

console.log(result6);
 (' ') 

 // ====

 // Convertir a arrow function
 
 //function greet(userName){
 // console.log('Hello ${userName}');
 // }
 // console.log(greet("Brineidy"));
 
 const greet = userName => console.log (' Hello ${userName}');
 console.log(greet('Brineidy'));

 const greet2 = userName => 'Hello ${userName}';
 console.log(greet2("Brineidy Salomón"));
 // ====

 // const boost = num => num * num;
 
const boost2 = num => Math.pow(num, 2);
 console.log(boost2(100));

// Arrow function con retorno explícito

// Se usa cuando el cuerpo de una función tiene llaves{}

const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add10(15, 7));

// ====
// Retorno implícito, cuando la función No tiene llaves realiza el retorno implicitamnete.
// const add11 = (num6, num7) => num6 + num7;

const add11 = (num6, num7) => {console.log(num6 + num7); num6 + num7};

console.log(add11(4, 6));
