// Alert ("estoy usando hello worl")
// Convenciones para nombrar variables
// CamelCase
// UpperCamelCase => se usa para nombrar las clases de Js 
// lowerCamelCase => se usa para nombrar las variables 
// SCREAMING_SNAKE_CASE => se usa para nombrar variables constantes 

// Snake_case => generalmente es usado para nombrar variables en el lenguaje python
// La caja-kebab => se usa para nombrar archivos multimedia en js 
// Caja-de-tren => variables del kebab-case

// Ya No se usa VAR para declarar una variables,actualmente se usa LET
// En JS, el uso del punto y coma al final de una sentencia es opcional en la mayoría de los casos, 
// gracias a la Inserción Automática de Punto y Coma

var product = "sensor-1";
var product2 = "sensor-2";

console.log(product);
console.log(product2);

// No se puede iniciar una variable con un guion medio 
// var-sensor="sensor-3";
// No se puede iniciar una variable con un numero 
// var 1sensor = "sensor-4";
// En el lenguaje si se permite iniciar una variable con un guion bajo 
// console.log(_sensor);

// Crear una variable de las tres formas distintas 

var sensor10 ="sensor de luvias";
const sensor10 = "sensor de lluvias";
let semsor10 = "sensor de lluvias";

// Ejemplo con var 
var sensor11 = "sensor de humedad";
var sensor11 = "sensor de calor";
console.log(sensor11);

// var no indica error de duplicidad 
// var no indica error de inicializacion 

var userName = "valentina";
console.log(userName);

// Usando la declaración const no se le puede cambiar su valor 
const maxSize = 1024;
maxSize = 2048;
console.log(maxSize)